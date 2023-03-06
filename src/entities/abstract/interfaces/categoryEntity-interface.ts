import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';
import { CategoryType } from '../../../domain/types/category-type';

export interface CategoryEntityInterface {
  setData(categoryDto: CreateCategoryDto | UpdateCategoryDto): void;
  validate(): void;
  getBody(): CategoryType;
  updateBody(mainCategory: Category): CategoryType;
}
