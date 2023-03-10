import { Category } from 'src/domain/entities/category';
import { CategoryType } from 'src/domain/types/category-type';

export interface CategoryRepositoryInterface {
  create(categoryBody: CategoryType): Promise<Category>;
  delete(categoryId: string, restaurantId: string): Promise<Category>;
  getOne(categoryId: string, restaurantId: string): Promise<Category>;
  getAll(restaurantId: string): Promise<Category[]>;
  update(categoryBody: CategoryType): Promise<Category>;
}
