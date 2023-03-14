import { DeleteProductUseCaseInterface } from 'src/data/abstract/usecases/product/deleteProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteProductUseCase implements DeleteProductUseCaseInterface {
  private readonly repository: ProductRepositoryInterface;

  public constructor(repository: ProductRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    productId: string,
    restaurantId: string,
  ): Promise<Product> {
    const fountEntity = await this.repository.getOne(productId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(productId, restaurantId);

    return deleted;
  }
}
