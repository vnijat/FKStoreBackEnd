import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersServices } from './orders.service';

@Module({
  imports: [],
  providers: [OrdersServices],
  controllers: [OrdersController],
})
export class OrdersModule {}
