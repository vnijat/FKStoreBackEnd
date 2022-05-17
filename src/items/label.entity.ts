import { BarcodeEntity } from 'src/barcode/barcode.entity';
import { CategoryEntity } from 'src/categories/category.entity';
import { common } from 'src/common/base.entity';
// import { BaseEntity } from 'src/common/base.entity';
import { LocationEntity } from 'src/locations/location.entity';
import { OrderItemEntity } from 'src/orders/entities/orderItem.entity';
import { PurchaseItemEntity } from 'src/purchases/entities/purchaseItem.entity';
import { StoreEntity } from 'src/stores/store.entity';
import { SupplierEntity } from 'src/suppliers/supplier.entity';
import { UnitEntity } from 'src/units/unit.entity';
import {
  BaseEntity,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ItemEntity } from './item.entity';

@Entity({ name: 'label' })
export class LabelEntity extends common {
  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => ItemEntity, (item) => item.label)
  items: ItemEntity[];
}
