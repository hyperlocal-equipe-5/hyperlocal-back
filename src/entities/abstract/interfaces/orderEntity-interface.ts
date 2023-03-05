import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';
import { OrderType } from '../../../domain/types/order-type';

export interface OrderEntityInterface {
  setData(orderDto: CreateOrderDto | UpdateOrderDto): void;
  validate(): void;
  getBody(): OrderType;
  updateBody(mainOrder: Order): OrderType;
}
