import { GetAllCategoriesUseCase } from 'src/data/usecases/category/getAllCategories-usecase';
import { CategoryRepository } from 'src/infra/repositories/category-repository';
import { GetAllCategoriesInterface } from 'src/presentation/abstract/controllers/category/getAllCategoriesController-interface';
import { GetAllCategoriesController } from 'src/presentation/controllers/category/getAllCategories-controller';

export function makeGetAllCategoryFactory(): GetAllCategoriesInterface {
  const repository = new CategoryRepository();
  const getAllcategoriesUseCase = new GetAllCategoriesUseCase(repository);

  return new GetAllCategoriesController(getAllcategoriesUseCase);
}
