import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientOrderEntity } from 'src/clients/entities/client.order.entity';
import { ItemEntity } from 'src/items/item.entity';
import { OrderItemEntity } from './entities/orderItem.entity';
import { OrderEntity } from './entities/orders.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      OrderItemEntity,
      ClientOrderEntity,
      ItemEntity,
    ]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
