import { UpdateOrderUseCaseInterface } from 'src/data/abstract/usecases/order/updateOrderUseCase-interface';
import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';

export class UpdateOrderUseCase implements UpdateOrderUseCaseInterface {
  public execute(updateOrderDto: UpdateOrderDto): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}
