import { GetOneCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/getOneCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';

export class GetOneCategoryUseCase implements GetOneCategoryUseCaseInterface {
  private readonly repository: CategoryRepositoryInterface;

  public constructor(repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    categoryId: string,
    restaurantId: string,
  ): Promise<Category> {
    const data = this.repository.getOne(categoryId, restaurantId);

    return data;
  }
}
