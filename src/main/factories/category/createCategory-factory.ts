import { CreateCategoryUseCase } from 'src/data/usecases/category/createCategory-usecase';
import { CategoryEntity } from 'src/entities/category-entity';
import { CategoryRepository } from 'src/infra/repositories/category-repository';
import { CreateCategoryInterface } from 'src/presentation/abstract/controllers/category/createCategoryController-interface';
import { CreateCategoryController } from 'src/presentation/controllers/category/createCategory-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateCategoryFactory(): CreateCategoryInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new CategoryEntity(idGeneratorAdapter);
  const repository = new CategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(repository, entity);

  return new CreateCategoryController(createCategoryUseCase);
}
