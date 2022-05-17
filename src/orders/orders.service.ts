import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientOrderEntity } from 'src/clients/entities/client.order.entity';
import { ItemEntity } from 'src/items/item.entity';
import { Repository } from 'typeorm';
import { AddOrderDto } from './dto/addOrder.dto';
import { AddOrderItemDto } from './dto/addOrderItem.dto';
import { OrderItemEntity } from './entities/orderItem.entity';
import { OrderEntity } from './entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepositery: Repository<OrderEntity>,
    @InjectRepository(OrderItemEntity)
    private readonly orderItemRepositery: Repository<OrderItemEntity>,
    @InjectRepository(ClientOrderEntity)
    private readonly clientOrderRepositery: Repository<ClientOrderEntity>,
    @InjectRepository(ItemEntity)
    private readonly itemRepositery: Repository<ItemEntity>,
  ) {}

  async getOrder(orderID: number) {
    const order = await this.orderRepositery.findOne(
      { id: orderID },
      { relations: ['orderItems'] },
    );
    if (!order) {
      throw new HttpException('order not found', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  async addOrder(addOrderDto: AddOrderDto) {
    const clientOrder = await this.clientOrderRepositery.findOne({
      id: addOrderDto.clientOrderId,
    });

    if (!clientOrder) {
      throw new HttpException(
        'Client Order not found',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newOrder = new OrderEntity();
    newOrder.clientOrder = clientOrder;
    Object.assign(newOrder, addOrderDto);
    return await this.orderRepositery.save(newOrder);
  }

  async addOrderItem(addOrderItemDto: AddOrderItemDto) {
    const item = await this.itemRepositery.findOne({
      id: addOrderItemDto.ItemId,
    });
    const Order = await this.orderRepositery.findOne({
      id: addOrderItemDto.orderId,
    });
    if (!Order || !item) {
      throw new HttpException(
        'Order or Item is not found',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const newOrderItem = new OrderItemEntity();
    Object.assign(newOrderItem, addOrderItemDto);
    const { quantity, pricePerUnit } = newOrderItem;
    newOrderItem.order = Order;
    newOrderItem.item = item;
    newOrderItem.totalPrice = quantity * pricePerUnit;
    return await this.orderItemRepositery.save(newOrderItem);
  }

  async updateOrderItem(orderItemId: number, quantity: number) {
    const orderItem = await this.orderItemRepositery.findOne({
      id: orderItemId,
    });
    orderItem.quantity = quantity;
    orderItem.totalPrice = quantity * orderItem.pricePerUnit;
    return await this.orderItemRepositery.save(orderItem);
  }

  async findByid(id: number) {
    const order = await this.orderRepositery.findOne({ id });
    if (!order) {
      throw new HttpException(
        'there is no order with this id',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    return order;
  }
  
}
