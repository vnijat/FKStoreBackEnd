import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsServices } from './items.service';
import { ItemEntity } from './item.entity';
import { SuppliersModule } from 'src/suppliers/suppliers.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { UnitsModule } from 'src/units/units.module';
import { StoresModule } from 'src/stores/stores.module';
import { LocationsModule } from 'src/locations/locations.module';
import { BarCodeModule } from 'src/barcode/barcode.module';
import { ColorEntity } from './color.entity';
import { LabelEntity } from './label.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity, ColorEntity, LabelEntity]),
    SuppliersModule,
    CategoriesModule,
    UnitsModule,
    StoresModule,
    LocationsModule,
    BarCodeModule,
  ],
  providers: [ItemsServices],
  controllers: [ItemsController],
  exports: [ItemsServices],
})
export class ItemsModule {}
