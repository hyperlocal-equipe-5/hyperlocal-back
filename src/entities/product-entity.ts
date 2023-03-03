import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';
import { ProductEntityInterface } from './abstract/productEntity-interface';

export class ProductEntity implements ProductEntityInterface {
  constructor(
    private readonly productDto: CreateProductDto | UpdateProductDto,
  ) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Product {
    throw new Error('Method not implemented.');
  }

  updateBody(mainProduct: Product): Product {
    throw new Error('Method not implemented.');
  }
}
