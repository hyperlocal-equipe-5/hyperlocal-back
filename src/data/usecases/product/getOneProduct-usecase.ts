import { GetOneProductUseCaseInterface } from 'src/data/abstract/usecases/product/getOneProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';

export class GetOneProductUseCase implements GetOneProductUseCaseInterface {
  private readonly repository: ProductRepositoryInterface;

  public constructor(repository: ProductRepositoryInterface) {
    this.repository = repository;
  }

  public execute(productId: string, restaurantId: string): Promise<Product> {
    const data = this.repository.getOne(productId, restaurantId);

    return data;
  }
}
