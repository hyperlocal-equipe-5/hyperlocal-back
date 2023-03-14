import { DeleteOrderUseCaseInterface } from 'src/data/abstract/usecases/order/deleteOrderUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { OrderRepositoryInterface } from 'src/infra/abstract/repositories/orderRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteOrderUseCase implements DeleteOrderUseCaseInterface {
  private readonly repository: OrderRepositoryInterface;

  public constructor(repository: OrderRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(orderId: string, restaurantId: string): Promise<Order> {
    const fountEntity = await this.repository.getOne(orderId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(orderId, restaurantId);

    return deleted;
  }
}
