import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';

export interface OrderEntityInterface {
  constructor(orderDto: CreateOrderDto | UpdateOrderDto): void;
  validate(): void;
  getBody(): Order;
  updateBody(mainOrder: Order): Order;
}
