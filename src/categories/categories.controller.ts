import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './category.entity';
import { AddCategoryDto } from './dto/addCategory.dto';

@Controller('category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async addCategory(
    @Body('category') addCategory: AddCategoryDto,
  ): Promise<CategoryEntity> {
    return await this.categoriesService.addCategory(addCategory);
  }

  @Get('tree')
  async getAllCategoriesTree() {
    return await this.categoriesService.getAllCategoriesTree();
  }

  @Get('all')
  async getAllCategories() {
    return await this.categoriesService.getAllCategories();
  }
}
