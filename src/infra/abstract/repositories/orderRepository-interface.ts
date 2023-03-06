import { Order } from 'src/domain/entities/order';
import { OrderType } from 'src/domain/types/order-type';

export interface OrderRepositoryInterface {
  create(orderBody: OrderType): Promise<Order>;
  delete(orderId: string, restaurantId: string): Promise<Order>;
  getOne(orderId: string, restaurantId: string): Promise<Order>;
  getAll(orderId: string): Promise<Order[]>;
  update(orderBody: OrderType): Promise<Order>;
}
