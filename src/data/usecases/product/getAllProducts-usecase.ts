import { GetAllProductsUseCaseInterface } from 'src/data/abstract/usecases/product/getAllProductsUseCase-interace';
import { Product } from 'src/domain/entities/product';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';

export class GetAllProductsUseCase implements GetAllProductsUseCaseInterface {
  private readonly repository: ProductRepositoryInterface;

  public constructor(repository: ProductRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Product[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
