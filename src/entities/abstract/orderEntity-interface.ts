import { Order } from 'src/domain/entities/order';

export interface OrderEntityInterface {
  validate(): void;
  getBody(): Order;
  updateBody(): Order;
}
