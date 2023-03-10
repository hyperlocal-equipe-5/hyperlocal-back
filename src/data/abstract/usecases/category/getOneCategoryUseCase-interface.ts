import { Category } from 'src/domain/entities/category';

export interface GetOneCategoryUseCaseInterface {
  execute(categoryId: string, restaurantId: string): Promise<Category>;
}
