import { Body, Controller, Get, Post } from '@nestjs/common';
import { BarCodeService } from './barcode.service';
import { AddBarcodeDto } from './dto/barcode.dto';

@Controller('barcode')
export class BarCodeController {
  constructor(private readonly barcodeService: BarCodeService) {}

  @Post()
  async addBarcode(@Body('barcode') addBarcodeDto: AddBarcodeDto) {
    return await this.barcodeService.addBarcode(addBarcodeDto);
  }

  @Get()
  async getBarcodes() {
    return await this.barcodeService.getBarcodes();
  }
}
