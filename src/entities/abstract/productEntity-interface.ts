import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';

export interface ProductEntityInterface {
  validate(): void;
  getBody(): Product;
  updateBody(mainProduct: Product): Product;
}
