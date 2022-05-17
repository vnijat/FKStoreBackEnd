import { AdminModule } from '@adminjs/nestjs';
import { Database, Resource } from '@adminjs/typeorm';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import AdminJS from 'adminjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarCodeModule } from './barcode/barcode.module';
import { CategoriesModule } from './categories/categories.module';
import { ClientsModule } from './clients/clients.module';
import { ItemsModule } from './items/items.module';
import { LocationsModule } from './locations/locations.module';
import { OrdersModule } from './orders/orders.module';
import ormconfig from './ormconfig';
import { PurchasesModule } from './purchases/purchases.module';
import { adminjSConfig } from './services';
import { SuppliersModule } from './suppliers/suppliers.module';
import { UnitsModule } from './units/units.module';

AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    AdminModule.createAdmin(adminjSConfig),
    TypeOrmModule.forRoot(ormconfig),
    ScheduleModule.forRoot(),
    ItemsModule,
    BarCodeModule,
    OrdersModule,
    SuppliersModule,
    PurchasesModule,
    ClientsModule,
    LocationsModule,
    CategoriesModule,
    UnitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
