import { GetOneOrderUseCaseInterface } from 'src/data/abstract/usecases/order/getOneOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { OrderRepositoryInterface } from 'src/infra/abstract/repositories/orderRepository-interface';

export class GetOneOrderUseCase implements GetOneOrderUseCaseInterface {
  private readonly repository: OrderRepositoryInterface;

  public constructor(repository: OrderRepositoryInterface) {
    this.repository = repository;
  }

  public execute(orderId: string, restaurantId: string): Promise<Order> {
    const data = this.repository.getOne(orderId, restaurantId);

    return data;
  }
}
