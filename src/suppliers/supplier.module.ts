import { Module } from '@nestjs/common';
import { SuppliersController } from './supplier.controller';
import { SupplierServices } from './supplier.service';

@Module({
  imports: [],
  providers: [SupplierServices],
  controllers: [SuppliersController],
})
export class SuppliersModule {}
