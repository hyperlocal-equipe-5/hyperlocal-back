import { Product } from 'src/domain/entities/product';

export interface GetAllProductsUseCaseInterface {
  execute(restaurantId: string): Promise<Product[]>;
}
