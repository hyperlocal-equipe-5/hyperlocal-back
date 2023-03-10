import { GetAllIngredientsUseCaseInterface } from 'src/data/abstract/usecases/ingredient/getAllIngredientsUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';

export class GetAllIngredientUseCase
  implements GetAllIngredientsUseCaseInterface
{
  private readonly repository: IngredientRepositoryInterface;

  public constructor(repository: IngredientRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Ingredient[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
