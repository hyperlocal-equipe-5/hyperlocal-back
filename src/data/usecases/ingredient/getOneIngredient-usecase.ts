import { GetOneIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/getOneIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';

export class GetOneIngredientUseCase
  implements GetOneIngredientUseCaseInterface
{
  public execute(
    ingreditnId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    throw new Error('Method not implemented.');
  }
}
