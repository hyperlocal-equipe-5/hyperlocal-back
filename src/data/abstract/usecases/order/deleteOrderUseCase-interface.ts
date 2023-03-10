import { Order } from 'src/domain/entities/order';

export interface DeleteOrderUseCaseInterface {
  execute(orderId: string, restaurantId: string): Promise<Order>;
}
