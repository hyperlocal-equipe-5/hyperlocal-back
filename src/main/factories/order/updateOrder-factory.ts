import { UpdateOrderUseCase } from 'src/data/usecases/order/updateOrder-usecase';
import { OrderEntity } from 'src/entities/order-entity';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { UpdateOrderInterface } from 'src/presentation/abstract/controllers/order/updateOrderController-interface';
import { UpdateOrderController } from 'src/presentation/controllers/order/updateOrder-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateOrderFactory(): UpdateOrderInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new OrderEntity(idGeneratorAdapter);
  const repository = new OrderRepository();
  const updateOrderUseCase = new UpdateOrderUseCase(entity, repository);

  return new UpdateOrderController(updateOrderUseCase);
}
