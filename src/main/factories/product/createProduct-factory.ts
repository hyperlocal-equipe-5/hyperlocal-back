import { CreateProductUseCase } from 'src/data/usecases/product/createProduct-usecase';
import { ProductEntity } from 'src/entities/product-entity';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { CreateProductInterface } from 'src/presentation/abstract/controllers/product/createProductController-interface';
import { CreateProductController } from 'src/presentation/controllers/product/createProduct-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateProductFactory(): CreateProductInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new ProductEntity(idGeneratorAdapter);
  const repository = new ProductRepository();
  const createProductUseCase = new CreateProductUseCase(entity, repository);

  return new CreateProductController(createProductUseCase);
}
