import { CreateIngredientUseCase } from 'src/data/usecases/ingredient/createIngredient-usecase';
import { IngredientEntity } from 'src/entities/ingredient-entity';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { CreateIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/createIngredientController-interface';
import { CreateIngredientController } from 'src/presentation/controllers/ingredient/createIngredient-controller';
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
