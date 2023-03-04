import { Order } from 'src/domain/entities/order';
import { OrderType } from '../types/order-type';

export interface OrderEntityInterface {
  validate(): void;
  getBody(): OrderType;
  updateBody(mainOrder: Order): OrderType;
}
