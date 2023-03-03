import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';
import { CategoryEntityInterface } from './abstract/categoryEntity-interface';

export class CategoryEntity implements CategoryEntityInterface {
  constructor(
    private readonly categoryDto: CreateCategoryDto | UpdateCategoryDto,
  ) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Category {
    throw new Error('Method not implemented.');
  }

  updateBody(mainCategory: Category): Category {
    throw new Error('Method not implemented.');
  }
}
