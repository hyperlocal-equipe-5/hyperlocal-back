import { OrderPriceCalculatorUseCase } from 'src/data/usecases/order/orderPriceCalculator-usecase';
import { UpdateOrderUseCase } from 'src/data/usecases/order/updateOrder-usecase';
import { OrderEntity } from 'src/entities/order-entity';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { UpdateOrderInterface } from 'src/presentation/abstract/controllers/order/updateOrderController-interface';
import { UpdateOrderController } from 'src/presentation/controllers/order/updateOrder-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateOrderFactory(): UpdateOrderInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const productRepository = new ProductRepository();
  const ingredientRepository = new IngredientRepository();
  const orderPriceCalculator = new OrderPriceCalculatorUseCase(
    productRepository,
    ingredientRepository,
  );
  const entity = new OrderEntity(idGeneratorAdapter, orderPriceCalculator);
  const repository = new OrderRepository();
  const updateOrderUseCase = new UpdateOrderUseCase(entity, repository);

  return new UpdateOrderController(updateOrderUseCase);
}
