import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';

export interface CategoryEntityInterface {
  validate(): void;
  getBody(): Category;
  updateBody(mainCategory: Category): Category;
}
