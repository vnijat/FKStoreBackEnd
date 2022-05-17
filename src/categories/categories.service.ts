import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, getRepository, Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { AddCategoryDto } from './dto/addCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async addCategory(addCategory: AddCategoryDto): Promise<CategoryEntity> {
    const { name, parentCategoryId } = addCategory;
    const newCategory = new CategoryEntity();
    const parentCategory = await this.categoryRepository.findOne({
      id: parentCategoryId,
    });
    if (parentCategory) {
      newCategory.parent = parentCategory;
    }
    newCategory.title = name;
    return await this.categoryRepository.save(newCategory);
  }

  async getAllCategoriesTree() {
    const manager = getManager();
    return await manager
      .getTreeRepository(CategoryEntity)
      .findTrees({ relations: ['items', 'items.unit'] });
  }

  async findByid(id: number) {
    const category = await this.categoryRepository.findOne({ id });
    if (!category) {
      throw new HttpException(
        'there is no category with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return category;
  }

  async getAllCategories() {
    return await this.categoryRepository.find({
      select: ['id', 'photoName', 'title'],
    });
  }

  async getCategoriesForInput() {
    return await this.categoryRepository
      .createQueryBuilder()
      .select(['id AS id', 'title AS label'])
      .getRawMany();
  }
}
