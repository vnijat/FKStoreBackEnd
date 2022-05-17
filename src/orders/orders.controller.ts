import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AddOrderDto } from './dto/addOrder.dto';
import { AddOrderItemDto } from './dto/addOrderItem.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  async getOrder(@Param('id') orderID: number) {
    return this.ordersService.getOrder(orderID);
  }

  @Post()
  async addOrder(@Body('order') addOrderDto: AddOrderDto) {
    return await this.ordersService.addOrder(addOrderDto);
  }

  @Post('/item')
  async addOrderItem(@Body('orderItem') addOrderItemDto: AddOrderItemDto) {
    return await this.ordersService.addOrderItem(addOrderItemDto);
  }

  @Patch('/item/:id')
  async updateOrderItem(
    @Param('id') itemId: number,
    @Body('quantity') quantity: number,
  ) {
    return await this.ordersService.updateOrderItem(itemId, quantity);
  }
}
