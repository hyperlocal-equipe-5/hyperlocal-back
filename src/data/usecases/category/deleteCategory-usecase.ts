import { DeleteCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/deleteCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteCategoryUseCase implements DeleteCategoryUseCaseInterface {
  private readonly repository: CategoryRepositoryInterface;

  public constructor(repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    categoryId: string,
    restaurantId: string,
  ): Promise<Category> {
    const fountEntity = await this.repository.getOne(categoryId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(categoryId, restaurantId);

    return deleted;
  }
}
