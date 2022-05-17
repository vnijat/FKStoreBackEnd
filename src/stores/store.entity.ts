import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'store' })
export class StoreEntity extends common {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => ItemEntity, (item) => item.store)
  items: ItemEntity[];
}
