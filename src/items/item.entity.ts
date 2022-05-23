import { BarcodeEntity } from 'src/barcode/barcode.entity';
import { CategoryEntity } from 'src/categories/category.entity';
import { common } from 'src/common/base.entity';
import { LocationEntity } from 'src/locations/location.entity';
import { OrderItemEntity } from 'src/orders/entities/orderItem.entity';
import { PurchaseItemEntity } from 'src/purchases/entities/purchaseItem.entity';
import { StoreEntity } from 'src/stores/store.entity';
import { SupplierEntity } from 'src/suppliers/supplier.entity';
import { UnitEntity } from 'src/units/unit.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ColorEntity } from './color.entity';
import { LabelEntity } from './label.entity';

@Entity({ name: 'item' })
export class ItemEntity extends common {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'photo_name', nullable: true })
  photoName: string;

  @ManyToOne(() => ColorEntity, (color) => color.items)
  color: ColorEntity;

  @Column({ name: 'description', default: '' })
  description: string;

  @Column({
    name: 'purchase_price',
    default: 0,
    type: 'decimal',
    precision: 19,
    scale: 3,
  })
  purchasePrice: number;

  @Column({
    name: 'price_per_unit',
    default: 0,
    type: 'decimal',
    precision: 19,
    scale: 3,
  })
  pricePerUnit: number;

  @Column({ name: 'quantity', type: 'decimal', precision: 10, scale: 3 })
  quantity: number;

  @ManyToOne(() => UnitEntity, (unit) => unit.items)
  unit: UnitEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.items, {
    eager: true,
  })
  category: CategoryEntity;

  @ManyToOne(() => BarcodeEntity, (barcode) => barcode.items)
  barcode: BarcodeEntity;

  @ManyToOne(() => SupplierEntity, (supplier) => supplier.items, {
    eager: true,
  })
  supplier: SupplierEntity;

  @ManyToOne(() => LocationEntity, (location) => location.items, {
    eager: true,
  })
  location: LocationEntity;

  @ManyToOne(() => StoreEntity, (store) => store.items)
  store: StoreEntity;

  @ManyToOne(() => LabelEntity, (label) => label.items)
  label: LabelEntity;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.item)
  orders: OrderItemEntity[];

  @OneToMany(() => PurchaseItemEntity, (purchaseItem) => purchaseItem.item)
  purchase: PurchaseItemEntity[];
}
