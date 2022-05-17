import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PurchaseEntity } from './purchase.entity';

@Entity({ name: 'purchase_item' })
export class PurchaseItemEntity extends common {
  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseItems)
  purchase: PurchaseEntity;

  @Column()
  unit: string;

  @Column({
    name: 'price_per_unit',
    type: 'decimal',
    precision: 19,
    scale: 3,
    default: 0,
  })
  pricePerUnit: number;

  @Column({ type: 'decimal', precision: 10, scale: 3, default: 0 })
  quantity: number;

  @Column({
    name: 'total_price',
    type: 'decimal',
    precision: 19,
    scale: 3,
    default: 0,
  })
  totalPrice: number;

  @ManyToOne(() => ItemEntity, (item) => item.purchase)
  item: ItemEntity;
}
