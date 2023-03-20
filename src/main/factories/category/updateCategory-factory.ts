import { UpdateCategoryUseCase } from 'src/data/usecases/category/updateCategory-usecase';
import { CategoryEntity } from 'src/entities/category-entity';
import { CategoryRepository } from 'src/infra/repositories/category-repository';
import { UpdateCategoryInterface } from 'src/presentation/abstract/controllers/category/updateCategoryController-interface';
import { UpdateCategoryController } from 'src/presentation/controllers/category/updateCategory-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateCategoryFactory(): UpdateCategoryInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new CategoryEntity(idGeneratorAdapter);
  const repository = new CategoryRepository();
  const updateCategoryUseCase = new UpdateCategoryUseCase(repository, entity);

  return new UpdateCategoryController(updateCategoryUseCase);
}
