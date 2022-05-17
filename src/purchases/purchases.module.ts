import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseEntity } from './entities/purchase.entity';
import { PurchaseItemEntity } from './entities/purchaseItem.entity';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseEntity, PurchaseItemEntity])],
  providers: [PurchasesService],
  controllers: [PurchasesController],
})
export class PurchasesModule {}
