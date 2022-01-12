import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddItemDto } from './dto/addItem.dto';
import { ItemEntity } from './items.entity';
import { ItemsServices } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsServices: ItemsServices) {}

  @Get()
  async getAll(@Query() query: any) {
    return await this.itemsServices.getAll(query);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async addItem(@Body('item') addItemDto: AddItemDto): Promise<ItemEntity> {
    return await this.itemsServices.addItem(addItemDto);
  }
}
