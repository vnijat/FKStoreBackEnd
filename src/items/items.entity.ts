import { BarCodeEntity } from 'src/barcode/barcode.entity';
import { CategoriesEntity } from 'src/categories/categories.entity';
import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'items' })
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'photo_path', nullable: true })
  photoPath: string;

  @Column({ nullable: true })
  color: string;

  @Column({ name: 'description', default: '' })
  description: string;

  @Column({ name: 'purchase_price', default: 0 })
  purchasePrice: number;

  @Column({ name: 'stock_price', default: 0 })
  stockPrice: number;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({ name: 'unit', default: 'piece' })
  unit: string;

  @ManyToOne(() => CategoriesEntity, (category) => category.items, {
    eager: true,
  })
  category: CategoriesEntity;

  @ManyToOne(() => BarCodeEntity, (barcode) => barcode.code, { eager: true })
  barCode: BarCodeEntity;

  @Column({ name: 'supplier', default: 'unknown' })
  supplier: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
