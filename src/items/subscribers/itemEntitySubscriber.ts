import { Logger } from '@nestjs/common';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  LoadEvent,
  UpdateEvent,
} from 'typeorm';
import { ItemEntity } from '../item.entity';

@EventSubscriber()
export class ItemSubscriber implements EntitySubscriberInterface<ItemEntity> {
  listenTo(): any {
    return ItemEntity;
  }

  //   afterLoad(
  //     entity: ItemEntity,
  //     event?: LoadEvent<ItemEntity>,
  //   ): void | Promise<any> {
  //     event.entity.totalPrice = event.entity.pricePerUnit * event.entity.quantity;

  //   }
  afterInsert(event: InsertEvent<ItemEntity>): void | Promise<any> {
    // event.entity.totalPrice = event.entity.pricePerUnit * event.entity.quantity;
  }

  afterUpdate(event: UpdateEvent<ItemEntity>): void | Promise<any> {}
}
