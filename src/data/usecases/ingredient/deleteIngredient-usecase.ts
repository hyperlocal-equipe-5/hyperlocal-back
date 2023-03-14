import { DeleteIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/deleteIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientRepositoryInterface } from 'src/infra/abstract/repositories/ingredientRepository.interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteIngredientUseCase
  implements DeleteIngredientUseCaseInterface
{
  private readonly repository: IngredientRepositoryInterface;

  public constructor(repository: IngredientRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    ingredientId: string,
    restaurantId: string,
  ): Promise<Ingredient> {
    const fountEntity = await this.repository.getOne(
      ingredientId,
      restaurantId,
    );

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(ingredientId, restaurantId);

    return deleted;
  }
}
