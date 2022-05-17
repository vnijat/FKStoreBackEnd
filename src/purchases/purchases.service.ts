import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseEntity } from './entities/purchase.entity';
import { PurchaseItemEntity } from './entities/purchaseItem.entity';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(PurchaseEntity)
    private readonly purchaseRepositery: Repository<PurchaseEntity>,
    @InjectRepository(PurchaseItemEntity)
    private readonly purchaseItemRepositery: Repository<PurchaseItemEntity>,
  ) {}
  async getPurchases() {
    return 'There Will Be Purchases';
  }

  async addPurchase() {
    
  }
}
