import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  BeforeInsert,
  Column,
} from 'typeorm';

export abstract class common extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
    select: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
    select: false,
  })
  updatedAt: Date;

  @Column({ name: 'sku_code', default: '' })
  skuCode: string;
}
