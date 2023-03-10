import { UpdateOrderDto } from 'src/domain/dto/order/updateOrder-dto';
import { Order } from 'src/domain/entities/order';

export interface UpdateOrderUseCaseInterface {
  execute(updateOrderDto: UpdateOrderDto): Promise<Order>;
}
