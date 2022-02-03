import { Controller, Get } from '@nestjs/common';
import { SupplierServices } from './supplier.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersServices: SupplierServices) {}

  @Get()
  async getSuppliers() {
    return this.suppliersServices.getSuppliers();
  }
}
