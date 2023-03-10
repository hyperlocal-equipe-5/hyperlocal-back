import { UpdateProductUseCaseInterface } from 'src/data/abstract/usecases/product/updateProductUseCase-interface';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';
import { ProductEntityInterface } from 'src/entities/abstract/interfaces/productEntity-interface';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';

export class UpdateProductUseCase implements UpdateProductUseCaseInterface {
  private readonly entity: ProductEntityInterface;
  private readonly repository: ProductRepositoryInterface;

  public constructor(
    entity: ProductEntityInterface,
    repository: ProductRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(updateProductDto: UpdateProductDto): Promise<Product> {
    this.entity.setData(updateProductDto);

    const { productId, restaurant } = updateProductDto;
    const foundCategory = await this.repository.getOne(productId, restaurant);
    const body = this.entity.updateBody(foundCategory);
    const response = await this.repository.update(body);

    return response;
  }
}
