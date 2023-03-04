import { Product } from 'src/domain/entities/product';
import { ProductType } from 'src/domain/types/product-type';

export interface ProductRepositoryInterface {
  create(productBody: ProductType): Promise<Product>;
  delete(productId: string, restaurantId: string): Promise<Product>;
  getOne(productId: string, restaurantId: string): Promise<Product>;
  getAll(productId: string): Promise<Product[]>;
  update(productBody: ProductType): Promise<Product>;
}
