import { Product } from 'src/domain/entities/product';

export interface DeleteProductUseCaseInterface {
  execute(productId: string, restaurantId: string): Promise<Product>;
}
