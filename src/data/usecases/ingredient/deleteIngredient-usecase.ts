import { DeleteIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/deleteIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';

export class DeleteIngredientUseCase
  implements DeleteIngredientUseCaseInterface
{
  private readonly repository: IngredientRepositoryInterface;

  public constructor(repository: IngredientRepositoryInterface) {
    this.repository = repository;
  }

  public execute(
    ingredientId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    const deleted = this.repository.delete(ingredientId, restaurantId);

    return deleted;
  }
}
