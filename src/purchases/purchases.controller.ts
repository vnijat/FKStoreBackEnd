import { Controller, Get, Post } from '@nestjs/common';
import { PurchasesService } from './purchases.service';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  async getPurchases() {
    return this.purchasesService.getPurchases();
  }

  @Post()
  async addPurchase() {
    return await this.purchasesService.addPurchase();
  }
}
