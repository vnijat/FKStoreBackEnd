// import { BaseEntity } from 'src/common/base.entity';
import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'location' })
export class LocationEntity extends common {
  @Column({ unique: true })
  code: string;

  @OneToMany(() => ItemEntity, (item) => item.location)
  items: ItemEntity[];
}
