import { UpdateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/updateOrderUseCase-interface';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';
import { OrderEntityInterface } from 'src/entities/abstract/interfaces/orderEntity-interface';
import { OrderRepositoryInterface } from 'src/infra/abstract/repositories/orderRepository-interface';

export class UpdateOrderUseCase implements UpdateOrderUseCaseInterface {
  private readonly entity: OrderEntityInterface;
  private readonly repository: OrderRepositoryInterface;

  public constructor(
    entity: OrderEntityInterface,
    repository: OrderRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(updateOrderDto: UpdateOrderDto): Promise<Order> {
    this.entity.setData(updateOrderDto);

    const { orderId, restaurant } = updateOrderDto;
    const foundCategory = await this.repository.getOne(orderId, restaurant);
    const body = this.entity.updateBody(foundCategory);
    const response = await this.repository.update(body);

    return response;
  }
}
