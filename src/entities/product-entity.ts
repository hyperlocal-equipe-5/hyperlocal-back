import { CreateProductDto } from 'src/domain/dto/product/createProduct-dto';
import { UpdateProductDto } from 'src/domain/dto/product/updateProduct-dto';
import { Product } from 'src/domain/entities/product';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { ProductEntityInterface } from './abstract/interfaces/productEntity-interface';
import { ProductType } from '../domain/types/product-type';
import { Entity } from './entity';

export class ProductEntity extends Entity implements ProductEntityInterface {
  private productDto: CreateProductDto | UpdateProductDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(productDto: CreateProductDto | UpdateProductDto): void {
    this.productDto = productDto;
  }

  public validate(): void {
    if (!this.productDto.name) {
      throw new MissingParamError('name');
    }

    if (!this.productDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): ProductType {
    return {
      productId: this.idGeneratorAdapter.generateId(),
      name: this.productDto.name ?? '',
      price: this.productDto.price ?? 0,
      description: this.productDto.description ?? '',
      highlight: this.productDto.highlight ?? false,
      image: this.productDto.image ?? '',
      ingredients: this.productDto.ingredients ?? [],
      category: this.productDto.category ?? '',
      restaurant: this.productDto.restaurant,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainProduct: Product): ProductType {
    return {
      productId: mainProduct.productId,
      name: this.productDto.name ?? mainProduct.name,
      price: this.productDto.price ?? mainProduct.price,
      description: this.productDto.description ?? mainProduct.description,
      highlight: this.productDto.highlight ?? mainProduct.highlight,
      image: this.productDto.image ?? mainProduct.image,
      ingredients:
        this.productDto.ingredients ??
        mainProduct.ingredients.map((ingredient) => ingredient.ingredientId),
      category: this.productDto.category ?? mainProduct.category.categoryId,
      restaurant: this.productDto.restaurant,
      createdAt: mainProduct.createdAt,
      updatedAt: this.getDate(),
    };
  }
}
