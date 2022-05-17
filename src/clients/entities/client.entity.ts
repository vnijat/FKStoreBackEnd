// import { BaseEntity } from 'src/common/base.entity';
import { common } from 'src/common/base.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClientType } from '../enums/clienttype.enum';
import { ClientOrderEntity } from './client.order.entity';

@Entity({ name: 'client' })
export class ClientEntity extends common {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  phone: string;

  @Column({
    type: 'enum',
    enum: ClientType,
    default: ClientType.INDIVIDUAL,
  })
  type: ClientType;

  @OneToMany(() => ClientOrderEntity, (clientOrders) => clientOrders.client)
  orders: ClientOrderEntity[];
}
