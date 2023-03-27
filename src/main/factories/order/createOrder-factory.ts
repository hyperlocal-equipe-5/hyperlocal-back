import { CreateOrderUseCase } from 'src/data/usecases/order/createOrder-usecase';
import { OrderPriceCalculatorUseCase } from 'src/data/usecases/order/orderPriceCalculator-usecase';
import { OrderEntity } from 'src/entities/order-entity';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { OrderRepository } from 'src/infra/repositories/order-repository';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { CreateOrderInterface } from 'src/presentation/abstract/controllers/order/createOrderController-interface';
import { CreateOrderController } from 'src/presentation/controllers/order/createOrder-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateOrderFactory(): CreateOrderInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const productRepository = new ProductRepository();
  const ingredientRepository = new IngredientRepository();
  const orderPriceCalculator = new OrderPriceCalculatorUseCase(
    productRepository,
    ingredientRepository,
  );
  const entity = new OrderEntity(idGeneratorAdapter, orderPriceCalculator);
  const repository = new OrderRepository();
  const createOrderUseCase = new CreateOrderUseCase(entity, repository);

  return new CreateOrderController(createOrderUseCase);
}
