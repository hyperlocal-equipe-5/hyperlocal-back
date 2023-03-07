import { CreateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/createOrderUseCase-interface';
import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { Order } from 'src/domain/entities/order';
import { OrderEntityInterface } from 'src/entities/abstract/interfaces/orderEntity-interface';
import { OrderRepositoryInterface } from 'src/infra/abstract/repositories/orderRepository-interface';

export class CreateOrderUseCase implements CreateOrderUseCaseInterface {
  private readonly entity: OrderEntityInterface;
  private readonly repository: OrderRepositoryInterface;

  public constructor(
    entity: OrderEntityInterface,
    repository: OrderRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(createOrderDto: CreateOrderDto): Promise<Order> {
    this.entity.setData(createOrderDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
