import { Order } from 'src/domain/entities/order';
import { OrderType } from 'src/domain/types/order-type';
import { OrderRepositoryInterface } from '../abstract/repositories/orderRepository-interface';

export class OrderRepository implements OrderRepositoryInterface {
  public create(orderBody: OrderType): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  public delete(orderId: string, restaurantId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  public getOne(orderId: string, restaurantId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  public getAll(orderId: string): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }
  public update(orderBody: OrderType): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}
