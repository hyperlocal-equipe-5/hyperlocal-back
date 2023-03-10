import { GetAllOrdersUseCase } from 'src/data/usecases/order/getAllOrders-usecase';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { GetAllOrdersInterface } from 'src/presentation/abstract/controllers/order/getAllOrdersController-interface';
import { GetAllOrdersController } from 'src/presentation/controllers/order/getAllOrders-controller';

export function makeGetAllOrderFactory(): GetAllOrdersInterface {
  const repository = new OrderRepository();
  const getAllordersUseCase = new GetAllOrdersUseCase(repository);

  return new GetAllOrdersController(getAllordersUseCase);
}
