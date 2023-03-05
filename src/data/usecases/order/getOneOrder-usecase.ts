import { GetOneOrderUseCaseInterface } from 'src/data/abstract/usecases/order/getOneOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';

export class GetOneOrderUseCase implements GetOneOrderUseCaseInterface {
  public execute(orderId: string, restaurantId: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}
