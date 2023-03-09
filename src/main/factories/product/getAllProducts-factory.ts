import { GetAllProductsUseCase } from 'src/data/usecases/product/getAllProducts-usecase';
import { ProductRepository } from 'src/infra/repositories/product-repository';
import { GetAllProductsInterface } from 'src/presentation/abstract/controllers/product/getAllProductsController-interface';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';

export function makeGetAllProductFactory(): GetAllProductsInterface {
  const repository = new ProductRepository();
  const getAllproductsUseCase = new GetAllProductsUseCase(repository);

  return new GetAllProductsController(getAllproductsUseCase);
}
