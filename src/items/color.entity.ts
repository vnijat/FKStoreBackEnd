import { common } from 'src/common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ItemEntity } from './item.entity';

@Entity('color')
export class ColorEntity extends common {
  @Column()
  name: string;

  @OneToMany(() => ItemEntity, (item) => item.color)
  items: ItemEntity[];
}
