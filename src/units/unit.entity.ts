import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('unit')
export class UnitEntity extends common {
  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => ItemEntity, (item) => item.unit)
  items: ItemEntity[];
}
