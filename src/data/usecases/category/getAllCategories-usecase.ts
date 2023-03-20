import { GetAllCategoriesUseCaseInterface } from 'src/data/abstract/usecases/category/getAllCategoriesUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';

export class GetAllCategoriesUseCase
  implements GetAllCategoriesUseCaseInterface
{
  private readonly repository: CategoryRepositoryInterface;

  public constructor(repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Category[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
