import { Controller, Get, Post } from '@nestjs/common';
import { BarCodeServices } from './barcode.service';

@Controller('barcode')
export class BarCodeController {
  constructor(private readonly barcodeServices: BarCodeServices) {}

  @Post()
  async addBarcode() {
    return await this.barcodeServices.addBarcode();
  }

  @Get()
  async getBarcodes() {
    return await this.barcodeServices.getBarcodes();
  }
}
