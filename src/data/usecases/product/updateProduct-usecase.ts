import { UpdateProductUseCaseInterface } from 'src/data/abstract/usecases/product/updateProductUseCase-interface';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';
import { ProductEntityInterface } from 'src/entities/abstract/interfaces/productEntity-interface';
import { ProductRepositoryInterface } from 'src/infra/abstract/repositories/productRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

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

    const { id, restaurant } = updateProductDto;
    const fountEntity = await this.repository.getOne(id, restaurant);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const body = this.entity.updateBody(fountEntity);
    const response = await this.repository.update(body);

    return response;
  }
}
