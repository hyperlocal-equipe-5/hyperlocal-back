import { CreateOrderDto } from 'src/domain/dto/order/createOrder-dto';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';

export interface OrderPriceCalculatorUseCaseInterface {
  execute(orderDto: CreateOrderDto | UpdateOrderDto): Promise<number>;
}
