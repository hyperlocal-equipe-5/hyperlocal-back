import { Category } from 'src/domain/entities/category';
import { CategoryType } from '../types/category-type';

export interface CategoryEntityInterface {
  validate(): void;
  getBody(): CategoryType;
  updateBody(mainCategory: Category): CategoryType;
}
