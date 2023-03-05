import { GetOneCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/getOneCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';

export class GetOneCategoryUseCase implements GetOneCategoryUseCaseInterface {
  execute(categoryId: string, restaurantId: string): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
