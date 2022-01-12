import { ItemEntity } from 'src/items/items.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bar_code' })
export class BarCodeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @OneToMany(() => ItemEntity, (item) => item.barCode)
  items: ItemEntity[];
}
