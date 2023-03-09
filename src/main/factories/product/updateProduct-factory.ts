import { UpdateProductUseCase } from 'src/data/usecases/product/updateProduct-usecase';
import { ProductEntity } from 'src/entities/product-entity';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { UpdateProductInterface } from 'src/presentation/abstract/controllers/product/updateProductController-interface';
import { UpdateProductController } from 'src/presentation/controllers/product/updateProduct-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateProductFactory(): UpdateProductInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new ProductEntity(idGeneratorAdapter);
  const repository = new ProductRepository();
  const updateProductUseCase = new UpdateProductUseCase(entity, repository);

  return new UpdateProductController(updateProductUseCase);
}
