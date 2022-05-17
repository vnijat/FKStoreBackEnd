import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { OrderEntity } from './orders.entity';

@Entity()
export class OrderItemEntity extends common {
  @ManyToOne(() => ItemEntity, (item) => item.orders)
  item: ItemEntity;

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

  @ManyToOne(() => OrderEntity, (order) => order.orderItems)
  order: OrderEntity;
}
