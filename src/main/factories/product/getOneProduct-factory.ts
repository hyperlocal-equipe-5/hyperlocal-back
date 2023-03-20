import { GetOneProductUseCase } from 'src/data/usecases/product/getOneProduct-usecase';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { GetOneProductInterface } from 'src/presentation/abstract/controllers/product/getOneProductController-interface';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';

export function makeGetOneProductFactory(): GetOneProductInterface {
  const repository = new ProductRepository();
  const getOneProductUseCase = new GetOneProductUseCase(repository);

  return new GetOneProductController(getOneProductUseCase);
}
