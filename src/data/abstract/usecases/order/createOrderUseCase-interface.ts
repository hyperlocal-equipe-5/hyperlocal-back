import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { Order } from 'src/domain/entities/order';

export interface CreateOrderUseCaseInterface {
  execute(createOrderDto: CreateOrderDto): Promise<Order>;
}
