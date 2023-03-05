import { DeleteProductUseCaseInterface } from 'src/data/abstract/usecases/product/deleteProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';

export class DeleteProductUseCase implements DeleteProductUseCaseInterface {
  private readonly repository: ProductRepositoryInterface;

  public constructor(repository: ProductRepositoryInterface) {
    this.repository = repository;
  }

  public execute(productId: string, restaurantId: string): Promise<Product> {
    const deleted = this.repository.delete(productId, restaurantId);

    return deleted;
  }
}
