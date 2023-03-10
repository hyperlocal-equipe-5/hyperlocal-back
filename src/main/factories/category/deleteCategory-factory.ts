import { DeleteCategoryUseCase } from 'src/data/usecases/category/deleteCategory-usecase';
import { CategoryRepository } from 'src/infra/repositories/category-repository';
import { DeleteCategoryInterface } from 'src/presentation/abstract/controllers/category/deleteCategoryController-interface';
import { DeleteCategoryController } from 'src/presentation/controllers/category/deleteCategory-controller';

export function makeDeleteCategoryFactory(): DeleteCategoryInterface {
  const repository = new CategoryRepository();
  const deleteCategoryUseCase = new DeleteCategoryUseCase(repository);

  return new DeleteCategoryController(deleteCategoryUseCase);
}
