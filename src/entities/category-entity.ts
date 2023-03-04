import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { CategoryEntityInterface } from './abstract/interfaces/categoryEntity-interface';
import { CategoryType } from './abstract/types/category-type';
import { Entity } from './entity';

export class CategoryEntity extends Entity implements CategoryEntityInterface {
  private readonly categoryDto: CreateCategoryDto | UpdateCategoryDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(
    categoryDto: CreateCategoryDto | UpdateCategoryDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
  ) {
    super();
    this.categoryDto = categoryDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public validate(): void {
    if (!this.categoryDto.name) {
      throw new MissingParamError('name');
    }

    if (!this.categoryDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): CategoryType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      name: this.categoryDto.name ?? '',
      highlight: this.categoryDto.highlight ?? false,
      image: this.categoryDto.image ?? '',
      products: [],
      restaurant: this.categoryDto.restaurant ?? '',
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainCategory: Category): CategoryType {
    return {
      id: mainCategory.id,
      name: this.categoryDto.name ?? mainCategory.name,
      highlight: this.categoryDto.highlight ?? mainCategory.highlight,
      image: this.categoryDto.image ?? mainCategory.image,
      products: mainCategory.products.map((item) => item.id),
      restaurant: this.categoryDto.restaurant,
      createdOn: mainCategory.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
