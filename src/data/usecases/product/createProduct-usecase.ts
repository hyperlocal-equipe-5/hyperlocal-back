import { CreateProductUseCaseInterface } from 'src/data/abstract/usecases/product/createProductUseCase-interface';
import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { Product } from 'src/domain/entities/product';

export class CreateProductUseCase implements CreateProductUseCaseInterface {
  public execute(createProductDto: CreateProductDto): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
