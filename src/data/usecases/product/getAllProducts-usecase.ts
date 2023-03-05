import { GetAllProductsUseCaseInterface } from 'src/data/abstract/usecases/product/getAllProductsUseCase-interace';
import { Product } from 'src/domain/entities/product';

export class GetAllProductsUseCase implements GetAllProductsUseCaseInterface {
  public execute(restaurantId: string): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
