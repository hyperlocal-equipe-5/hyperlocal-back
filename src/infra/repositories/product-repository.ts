import { Product } from 'src/domain/entities/product';
import { ProductType } from 'src/domain/types/product-type';
import { ProductRepositoryInterface } from '../abstract/repositories/productRepository-interface';

export class ProductRepository implements ProductRepositoryInterface {
  public create(productBody: ProductType): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  public delete(productId: string, restaurantId: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  public getOne(productId: string, restaurantId: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  public getAll(productId: string): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
  public update(productBody: ProductType): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
