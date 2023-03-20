import { GetOneOrderUseCase } from 'src/data/usecases/order/getOneOrder-usecase';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { GetOneOrderInterface } from 'src/presentation/abstract/controllers/order/getOneOrderController-interface';
import { GetOneOrderController } from 'src/presentation/controllers/order/getOneOrder-controller';

export function makeGetOneOrderFactory(): GetOneOrderInterface {
  const repository = new OrderRepository();
  const getOneOrderUseCase = new GetOneOrderUseCase(repository);

  return new GetOneOrderController(getOneOrderUseCase);
}
