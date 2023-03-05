import { UpdateProductUseCaseInterface } from 'src/data/abstract/usecases/product/updateProductUseCase-interface';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';

export class UpdateProductUseCase implements UpdateProductUseCaseInterface {
  public execute(updateProductDto: UpdateProductDto): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
