// import { BaseEntity } from 'src/common/base.entity';
import { common } from 'src/common/base.entity';
import { ItemEntity } from 'src/items/item.entity';
import {
  Column,
  Entity,
  OneToMany,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity({ name: 'category' })
@Tree('closure-table')
export class CategoryEntity extends common {
  @Column()
  title: string;

  @OneToMany(() => ItemEntity, (item) => item.category)
  items: ItemEntity[];

  @Column({ name: 'photo_name', nullable: true })
  photoName: string;

  @TreeChildren()
  subCategories: CategoryEntity[];

  @TreeParent()
  parent: CategoryEntity;
}
