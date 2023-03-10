import { GetOneCategoryUseCase } from 'src/data/usecases/category/getOneCategory-usecase';
import { CategoryRepository } from 'src/infra/repositories/category-repository';
import { GetOneCategoryInterface } from 'src/presentation/abstract/controllers/category/getOneCategoryController-interface';
import { GetOneCategoryController } from 'src/presentation/controllers/category/getOneCategory-controller';

export function makeGetOneCategoryFactory(): GetOneCategoryInterface {
  const repository = new CategoryRepository();
  const getOneCategoryUseCase = new GetOneCategoryUseCase(repository);

  return new GetOneCategoryController(getOneCategoryUseCase);
}
