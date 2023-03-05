import { CreateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/createOrderUseCase-interface';
import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { Order } from 'src/domain/entities/order';

export class CreateOrderUseCase implements CreateOrderUseCaseInterface {
  public execute(createOrderDto: CreateOrderDto): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}
