import { DeleteOrderUseCaseInterface } from 'src/data/abstract/usecases/order/deleteOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';

export class DeleteOrderUseCase implements DeleteOrderUseCaseInterface {
  public execute(orderId: string, restaurantId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}
