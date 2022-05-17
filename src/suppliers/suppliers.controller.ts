import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddSupplierDto } from './dto/addSupplier.dto';
import { SupplierService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SupplierService) {}

  @Get()
  async getSuppliers() {
    return this.suppliersService.getSuppliers();
  }

  @Post()
  async addSupplier(@Body('supplier') addSuplierDto: AddSupplierDto) {
    return this.suppliersService.addSupplier(addSuplierDto);
  }
}
