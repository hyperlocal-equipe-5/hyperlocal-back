import { CreateOrderUseCase } from 'src/data/usecases/order/createOrder-usecase';
import { OrderEntity } from 'src/entities/order-entity';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { CreateOrderInterface } from 'src/presentation/abstract/controllers/order/createOrderController-interface';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateOrderFactory(): CreateOrderInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new OrderEntity(idGeneratorAdapter);
  const repository = new OrderRepository();
  const createOrderUseCase = new CreateOrderUseCase(entity, repository);

  return new CreateOrderController(createOrderUseCase);
}
