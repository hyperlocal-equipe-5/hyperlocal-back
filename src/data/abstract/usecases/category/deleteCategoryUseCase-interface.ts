import { Category } from 'src/domain/entities/category';

export interface DeleteCategoryUseCaseInterface {
  execute(categoryId: string, restaurantId: string): Promise<Category>;
}
