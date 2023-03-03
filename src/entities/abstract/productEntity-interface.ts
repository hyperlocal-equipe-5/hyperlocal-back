import { Product } from 'src/domain/entities/product';

export interface ProductEntityInterface {
  validate(): void;
  getBody(): Product;
  updateBody(): Product;
}
