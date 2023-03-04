import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { ProductEntityInterface } from './abstract/interfaces/productEntity-interface';
import { ProductType } from './abstract/types/product-type';
import { Entity } from './entity';

export class ProductEntity extends Entity implements ProductEntityInterface {
  private readonly productDto: CreateProductDto | UpdateProductDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(
    productDto: CreateProductDto | UpdateProductDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
  ) {
    super();
    this.productDto = productDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public validate(): void {
    throw new Error('Method not implemented.');
  }

  public getBody(): ProductType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      name: this.productDto.name ?? '',
      price: this.productDto.price ?? 0,
      description: this.productDto.description ?? '',
      highlight: this.productDto.highlight ?? false,
      image: this.productDto.image ?? '',
      ingredients: this.productDto.ingredients ?? [],
      category: this.productDto.category ?? '',
      restaurant: this.productDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainProduct: Product): ProductType {
    return {
      id: mainProduct.id,
      name: this.productDto.name ?? mainProduct.name,
      price: this.productDto.price ?? mainProduct.price,
      description: this.productDto.description ?? mainProduct.description,
      highlight: this.productDto.highlight ?? mainProduct.highlight,
      image: this.productDto.image ?? mainProduct.image,
      ingredients:
        this.productDto.ingredients ??
        mainProduct.ingredients.map((ingredient) => ingredient.id),
      category: this.productDto.category ?? mainProduct.category.id,
      restaurant: this.productDto.restaurant,
      createdOn: mainProduct.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
