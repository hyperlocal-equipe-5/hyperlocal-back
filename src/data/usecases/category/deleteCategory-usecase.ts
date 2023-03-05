import { DeleteCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/deleteCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';

export class DeleteCategoryUseCase implements DeleteCategoryUseCaseInterface {
  public execute(categoryId: string, restaurantId: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
