import { DeleteIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/deleteIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';

export class DeleteIngredientUseCase
  implements DeleteIngredientUseCaseInterface
{
  public execute(
    ingredientId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    throw new Error('Method not implemented.');
  }
}
