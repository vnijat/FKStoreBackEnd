import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier.entity';
import { SuppliersController } from './suppliers.controller';
import { SupplierService } from './suppliers.service';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierEntity])],
  providers: [SupplierService],
  controllers: [SuppliersController],
  exports: [SupplierService],
})
export class SuppliersModule {}
