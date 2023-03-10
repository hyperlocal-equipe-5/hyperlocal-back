import { GetAllOrdersUseCaseInterface } from 'src/data/abstract/usecases/order/getAllOrdersUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { OrderRepositoryInterface } from 'src/infra/abstract/repositories/orderRepository-interface';

export class GetAllOrdersUseCase implements GetAllOrdersUseCaseInterface {
  private readonly repository: OrderRepositoryInterface;

  public constructor(repository: OrderRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Order[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
