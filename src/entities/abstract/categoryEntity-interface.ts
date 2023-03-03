import { Category } from 'src/domain/entities/category';

export interface CategoryEntityInterface {
  validate(): void;
  getBody(): Category;
  updateBody(): Category;
}
