import { Product } from 'src/domain/entities/product';
import { ProductType } from '../types/product-type';

export interface ProductEntityInterface {
  validate(): void;
  getBody(): ProductType;
  updateBody(mainProduct: Product): ProductType;
}
