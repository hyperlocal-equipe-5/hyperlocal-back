import { GetOneIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/getOneIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';

export class GetOneIngredientUseCase
  implements GetOneIngredientUseCaseInterface
{
  private readonly repository: IngredientRepositoryInterface;

  public constructor(repository: IngredientRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    ingredientId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    const data = await this.repository.getOne(ingredientId, restaurantId);

    return data;
  }
}
