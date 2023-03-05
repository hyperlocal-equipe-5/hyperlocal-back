import { CreateIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/createIngredientUseCase-interface';
import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';

export class CreateIngredientUseCase
  implements CreateIngredientUseCaseInterface
{
  public execute(
    createIngredientDto: CreateIngredientDto,
  ): Promise<Ingredient> {
    throw new Error('Method not implemented.');
  }
}
