import { GetOneIngredientUseCase } from 'src/data/usecases/ingredient/getOneIngredient-usecase';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { GetOneIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/getOneIngredientController-interface';
import { GetOneIngredientController } from 'src/presentation/controllers/ingredient/getOneIngredient-controller';

export function makeGetOneIngredientFactory(): GetOneIngredientInterface {
  const repository = new IngredientRepository();
  const getOneIngredientUseCase = new GetOneIngredientUseCase(repository);

  return new GetOneIngredientController(getOneIngredientUseCase);
}
