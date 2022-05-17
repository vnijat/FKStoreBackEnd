// import { BaseEntity } from 'src/common/base.entity';
import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'bar_code' })
export class BarcodeEntity extends common {
  @Column({ unique: true })
  code: string;

  @OneToMany(() => ItemEntity, (item) => item.barcode)
  items: ItemEntity[];
}
