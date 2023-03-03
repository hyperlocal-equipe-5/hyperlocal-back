import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';
import { OrderEntityInterface } from './abstract/orderEntity-interface';

export class OrderEntity implements OrderEntityInterface {
  constructor(private readonly orderDto: CreateOrderDto | UpdateOrderDto) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Order {
    throw new Error('Method not implemented.');
  }

  updateBody(mainOrder: Order): Order {
    throw new Error('Method not implemented.');
  }
}
