import { Category } from 'src/domain/entities/category';

export interface GetAllCategoriesUseCaseInterface {
  execute(restaurantId: string): Promise<Category[]>;
}
