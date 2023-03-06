import { DeleteCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/deleteCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';

export class DeleteCategoryUseCase implements DeleteCategoryUseCaseInterface {
  private readonly repository: CategoryRepositoryInterface;

  public constructor(repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    categoryId: string,
    restaurantId: string,
  ): Promise<Category> {
    const deleted = this.repository.delete(categoryId, restaurantId);

    return deleted;
  }
}
