import { DeleteIngredientUseCase } from 'src/data/usecases/ingredient/deleteIngredient-usecase';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { DeleteIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/deleteIngredientController-interface';
import { DeleteIngredientController } from 'src/presentation/controllers/ingredient/deleteIngredient-controller';

export function makeDeleteIngredientFactory(): DeleteIngredientInterface {
  const repository = new IngredientRepository();
  const deleteIngredientUseCase = new DeleteIngredientUseCase(repository);

  return new DeleteIngredientController(deleteIngredientUseCase);
}
