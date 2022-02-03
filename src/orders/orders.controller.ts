import { Controller, Get } from '@nestjs/common';
import { OrdersServices } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersServices: OrdersServices) {}

  @Get()
  async getOrders() {
    return this.ordersServices.getOrders();
  }
}
