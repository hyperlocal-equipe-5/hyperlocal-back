import { GetOneProductUseCaseInterface } from 'src/data/abstract/usecases/product/getOneProductUseCase-interface';
import { Product } from 'src/domain/entities/product';

export class GetOneProductUseCase implements GetOneProductUseCaseInterface {
  public execute(productId: string, restaurantId: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
