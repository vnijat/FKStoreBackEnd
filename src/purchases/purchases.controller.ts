import { Controller, Get } from '@nestjs/common';
import { PurchasesServices } from './purchases.service';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesServices: PurchasesServices) {}

  @Get()
  async getPurchases() {
    return this.purchasesServices.getPurchases();
  }
}
