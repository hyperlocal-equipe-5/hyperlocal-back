import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { Product } from 'src/domain/entities/product';

export interface CreateProductUseCaseInterface {
  execute(createProductDto: CreateProductDto): Promise<Product>;
}
