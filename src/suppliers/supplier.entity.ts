import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SupplierEntity extends common {
  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => ItemEntity, (item) => item.supplier)
  items: ItemEntity[];
}
