import { UpdateIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/updateIngredientUseCase-interface';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';

export class UpdateIngredientUseCase
  implements UpdateIngredientUseCaseInterface
{
  public execute(
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<Ingredient> {
    throw new Error('Method not implemented.');
  }
}
