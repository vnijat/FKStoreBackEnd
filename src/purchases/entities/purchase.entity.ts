import { common } from 'src/common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { PurchaseItemEntity } from './purchaseItem.entity';

@Entity({ name: 'purchase' })
export class PurchaseEntity extends common {
  @OneToMany(() => PurchaseItemEntity, (purchaseItem) => purchaseItem.purchase)
  purchaseItems: PurchaseItemEntity[];

  @Column({ name: 'total_price', type: 'decimal', precision: 19, scale: 3 })
  totalPrice: number;

  @Column({ name: 'total_items' })
  totalItems: number;
}
