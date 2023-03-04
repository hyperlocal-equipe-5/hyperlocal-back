import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';

export interface UpdateProductUseCaseInterface {
  execute(updateProductDto: UpdateProductDto): Promise<Product>;
}
