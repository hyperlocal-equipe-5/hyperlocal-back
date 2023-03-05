import { GetAllOrdersUseCaseInterface } from 'src/data/abstract/usecases/order/getAllOrdersUseCase-interface';
import { Order } from 'src/domain/entities/order';

export class GetAllOrdersUseCase implements GetAllOrdersUseCaseInterface {
  public execute(restaurantId: string): Promise<Order[]> {
    throw new Error('Method not implemented.');
  }
}
