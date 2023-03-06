import { DeleteOrderUseCaseInterface } from 'src/data/abstract/usecases/order/deleteOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { OrderRepositoryInterface } from 'src/infra/abstract/repositories/orderRepository-interface';

export class DeleteOrderUseCase implements DeleteOrderUseCaseInterface {
  private readonly repository: OrderRepositoryInterface;

  public constructor(repository: OrderRepositoryInterface) {
    this.repository = repository;
  }

  public execute(orderId: string, restaurantId: string): Promise<Order> {
    const deleted = this.repository.delete(orderId, restaurantId);

    return deleted;
  }
}
