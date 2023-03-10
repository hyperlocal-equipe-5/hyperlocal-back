import { DeleteOrderUseCase } from 'src/data/usecases/order/deleteOrder-usecase';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { DeleteOrderInterface } from 'src/presentation/abstract/controllers/order/deleteOrderController-interface';
import { DeleteOrderController } from 'src/presentation/controllers/order/deleteOrder-controller';

export function makeDeleteOrderFactory(): DeleteOrderInterface {
  const repository = new OrderRepository();
  const deleteOrderUseCase = new DeleteOrderUseCase(repository);

  return new DeleteOrderController(deleteOrderUseCase);
}
