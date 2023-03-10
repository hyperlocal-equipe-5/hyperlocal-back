import { DeleteProductUseCase } from 'src/data/usecases/product/deleteProduct-usecase';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { DeleteProductInterface } from 'src/presentation/abstract/controllers/product/deleteProductController-interface';
import { DeleteProductController } from 'src/presentation/controllers/product/deleteProduct-controller';

export function makeDeleteProductFactory(): DeleteProductInterface {
  const repository = new ProductRepository();
  const deleteProductUseCase = new DeleteProductUseCase(repository);

  return new DeleteProductController(deleteProductUseCase);
}
