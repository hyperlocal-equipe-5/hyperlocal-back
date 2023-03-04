import { Order } from 'src/domain/entities/order';

export interface GetOneOrderUseCaseInterface {
  execute(orderId: string, restaurantId: string): Promise<Order>;
}
