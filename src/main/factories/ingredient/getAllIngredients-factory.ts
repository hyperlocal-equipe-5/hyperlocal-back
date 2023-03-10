import { GetAllIngredientUseCase } from 'src/data/usecases/ingredient/getAllIngredients-usecase';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { GetAllIngredientsInterface } from 'src/presentation/abstract/controllers/ingredient/getAllIngredientsController-interface';
import { GetAllIngredientsController } from 'src/presentation/controllers/ingredient/getAllIngredients-controller';

export function makeGetAllIngredientFactory(): GetAllIngredientsInterface {
  const repository = new IngredientRepository();
  const getAllingredientsUseCase = new GetAllIngredientUseCase(repository);

  return new GetAllIngredientsController(getAllingredientsUseCase);
}
