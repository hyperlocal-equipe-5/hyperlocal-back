import { GetAllIngredientsUseCaseInterface } from 'src/data/abstract/usecases/ingredient/getAllIngredientsUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';

export class GetAllIngredientUseCase
  implements GetAllIngredientsUseCaseInterface
{
  public execute(restaurantId: string): Promise<Ingredient[]> {
    throw new Error('Method not implemented.');
  }
}
