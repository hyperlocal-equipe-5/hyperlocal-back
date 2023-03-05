import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';
import { ProductType } from '../../../domain/types/product-type';

export interface ProductEntityInterface {
  setData(productDto: CreateProductDto | UpdateProductDto): void;
  validate(): void;
  getBody(): ProductType;
  updateBody(mainProduct: Product): ProductType;
}
