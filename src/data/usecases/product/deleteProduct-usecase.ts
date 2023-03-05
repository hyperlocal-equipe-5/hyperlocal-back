import { DeleteProductUseCaseInterface } from 'src/data/abstract/usecases/product/deleteProductUseCase-interface';
import { Product } from 'src/domain/entities/product';

export class DeleteProductUseCase implements DeleteProductUseCaseInterface {
  public execute(productId: string, restaurantId: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
