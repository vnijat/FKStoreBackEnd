import { common } from 'src/common/base.entity';
import { OrderEntity } from 'src/orders/entities/orders.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity({ name: 'client_order' })
export class ClientOrderEntity extends common {
  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'uncompleted' })
  status: string;

  @Column({ type: 'decimal', precision: 19, scale: 3, default: 0 })
  price: number;

  @Column({ type: 'decimal', precision: 19, scale: 3, default: 0 })
  paid: number;

  @ManyToOne(() => ClientEntity, (client) => client.orders)
  client: ClientEntity;

  @OneToMany(() => OrderEntity, (order) => order.clientOrder)
  orders: OrderEntity[];
}
