import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { AddItemDto } from './dto/addItem.dto';
import { CategoriesEntity } from '../categories/categories.entity';
import { ItemEntity } from './items.entity';
import { BarCodeEntity } from 'src/barcode/barcode.entity';
import { extname } from 'path';

@Injectable()
export class ItemsServices {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
    @InjectRepository(BarCodeEntity)
    private readonly barCodeRepositery: Repository<BarCodeEntity>,
    @InjectRepository(CategoriesEntity)
    private readonly categoryRepositery: Repository<CategoriesEntity>,
  ) {}

  async getAll(query: any) {
    const queryBuilder = getRepository(ItemEntity)
      .createQueryBuilder('items')
      .leftJoinAndSelect('items.barCode', 'barCode')
      .leftJoinAndSelect('items.category', 'category');

    const itemsCount = await queryBuilder.getCount();
    if (query.limit) {
      queryBuilder.take(query.limit);
    }
    if (query.offset) {
      queryBuilder.skip(query.offset);
    }
    if (query.barCode) {
      const barCode = await this.barCodeRepositery.findOne({
        code: query.barCode,
      });
      queryBuilder.andWhere('items.barCode=:id', {
        id: barCode.id,
      });
    }
    if (query.category) {
      const category = await this.categoryRepositery.findOne({
        title: query.category,
      });
      queryBuilder.andWhere('items.category=:categoryID', {
        categoryID: category.id,
      });
    }
    queryBuilder.orderBy('items.createdAt', 'DESC');
    const items = await queryBuilder.getMany();
    return { items: items, itemsCount };
  }

  async addItem(
    addItemDto: AddItemDto,
    photoPath: string,
  ): Promise<ItemEntity> {
    let barCode: BarCodeEntity;
    let category: CategoriesEntity;
    category = await this.categoryRepositery.findOne({
      title: addItemDto.category,
    });
    barCode = await this.barCodeRepositery.findOne({
      code: addItemDto.barCode,
    });
    if (!barCode) {
      barCode = new BarCodeEntity();
      barCode.code = addItemDto.barCode;
      barCode = await this.barCodeRepositery.save(barCode);
    }
    if (!category) {
      category = new CategoriesEntity();
      category.title = addItemDto.category;
      category = await this.categoryRepositery.save(category);
    }
    const item = new ItemEntity();
    Object.assign(item, addItemDto);
    item.barCode = barCode;
    item.category = category;
    if (photoPath) {
      item.photoPath = photoPath;
    }
    return await this.itemRepository.save(item);
  }

  async deleteMany(Ids: number[]) {
    await this.itemRepository
      .createQueryBuilder()
      .delete()
      .where('id IN (:...Ids)', {
        Ids,
      })
      .execute();
  }
}
