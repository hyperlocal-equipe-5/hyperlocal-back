import { CreateProductUseCaseInterface } from 'src/data/abstract/usecases/product/createProductUseCase-interface';
import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { Product } from 'src/domain/entities/product';
import { ProductEntityInterface } from 'src/entities/abstract/interfaces/productEntity-interface';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';

export class CreateProductUseCase implements CreateProductUseCaseInterface {
  private readonly entity: ProductEntityInterface;
  private readonly repository: ProductRepositoryInterface;

  public constructor(
    entity: ProductEntityInterface,
    repository: ProductRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(createProductDto: CreateProductDto): Promise<Product> {
    this.entity.setData(createProductDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
