import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsServices } from './items.service';
import { BarCodeEntity } from '../barcode/barcode.entity';
import { CategoriesEntity } from 'src/categories/categories.entity';
import { ItemEntity } from './items.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity, BarCodeEntity, CategoriesEntity]),
  ],
  providers: [ItemsServices],
  controllers: [ItemsController],
})
export class ItemsModule {}
