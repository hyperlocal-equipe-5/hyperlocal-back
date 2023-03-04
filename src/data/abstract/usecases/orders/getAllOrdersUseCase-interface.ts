import { Order } from 'src/domain/entities/order';

export interface GetAllOrdersUseCaseInterface {
  execute(restaurantId: string): Promise<Order[]>;
}
