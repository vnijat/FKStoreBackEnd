import { ClientOrderEntity } from 'src/clients/entities/client.order.entity';
import { common } from 'src/common/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { OrderItemEntity } from './orderItem.entity';

@Entity({ name: 'order' })
export class OrderEntity extends common {
  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order, {
    cascade: true,
  })
  orderItems: OrderItemEntity[];

  @ManyToOne(() => ClientOrderEntity, (clientOrder) => clientOrder.orders)
  clientOrder: ClientOrderEntity;

  @Column({ default: 0 })
  totalItems: number;

  @Column({ type: 'decimal', precision: 19, scale: 3, default: 0 })
  totalPrice: number;

  @Column({ default: 'pending' })
  status: string;
}
