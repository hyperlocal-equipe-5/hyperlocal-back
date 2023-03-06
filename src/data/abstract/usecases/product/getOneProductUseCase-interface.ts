import { Product } from 'src/domain/entities/product';

export interface GetOneProductUseCaseInterface {
  execute(productId: string, restaurantId: string): Promise<Product>;
}
