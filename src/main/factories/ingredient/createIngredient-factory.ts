import { CreateIngredientUseCase } from 'src/data/usecases/Ingredient/createIngredient-usecase';
import { IngredientEntity } from 'src/entities/Ingredient-entity';
import { IngredientRepository } from 'src/infra/repositories/Ingredient-repository';
import { CreateIngredientInterface } from 'src/presentation/abstract/controllers/Ingredient/createIngredientController-interface';
import { CreateIngredientController } from 'src/presentation/controllers/Ingredient/createIngredient-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateIngredientFactory(): CreateIngredientInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new IngredientEntity(idGeneratorAdapter);
  const repository = new IngredientRepository();
  const createIngredientUseCase = new CreateIngredientUseCase(
    entity,
    repository,
  );

  return new CreateIngredientController(createIngredientUseCase);
}
