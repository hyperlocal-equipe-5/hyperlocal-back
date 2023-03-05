import { GetAllCategoriesUseCaseInterface } from 'src/data/abstract/usecases/category/getAllCategoriesUseCase-interface';
import { Category } from 'src/domain/entities/category';

export class GetAllCategoriesUseCase
  implements GetAllCategoriesUseCaseInterface
{
  execute(restaurantId: string): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
}
