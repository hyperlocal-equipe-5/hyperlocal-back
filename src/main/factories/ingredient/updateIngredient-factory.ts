import { UpdateIngredientUseCase } from 'src/data/usecases/ingredient/updateIngredient-usecase';
import { IngredientEntity } from 'src/entities/ingredient-entity';
import { IngredientRepository } from 'src/infra/repositories/ingredient-repository';
import { UpdateIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/updateIngredientController-interface';
import { UpdateIngredientController } from 'src/presentation/controllers/ingredient/updateIngredient-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateIngredientFactory(): UpdateIngredientInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new IngredientEntity(idGeneratorAdapter);
  const repository = new IngredientRepository();
  const updateIngredientUseCase = new UpdateIngredientUseCase(
    entity,
    repository,
  );

  return new UpdateIngredientController(updateIngredientUseCase);
}
