import { DeleteIngredientUseCase } from 'src/data/usecases/Ingredient/deleteIngredient-usecase';
import { IngredientRepository } from 'src/infra/repositories/Ingredient-repository';
import { DeleteIngredientInterface } from 'src/presentation/abstract/controllers/Ingredient/deleteIngredientController-interface';
import { DeleteIngredientController } from 'src/presentation/controllers/Ingredient/deleteIngredient-controller';

export function makeDeleteIngredientFactory(): DeleteIngredientInterface {
  const repository = new IngredientRepository();
  const deleteIngredientUseCase = new DeleteIngredientUseCase(repository);

  return new DeleteIngredientController(deleteIngredientUseCase);
}
