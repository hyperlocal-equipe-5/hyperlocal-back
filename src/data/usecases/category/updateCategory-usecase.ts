import { UpdateCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/updateCategoryUseCase-interface';
import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';
import { CategoryEntityInterface } from 'src/entities/abstract/interfaces/categoryEntity-interface';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';

export class UpdateCategoryUseCase implements UpdateCategoryUseCaseInterface {
  private readonly repository: CategoryRepositoryInterface;
  private readonly entity: CategoryEntityInterface;

  public constructor(
    repository: CategoryRepositoryInterface,
    entity: CategoryEntityInterface,
  ) {
    this.repository = repository;
    this.entity = entity;
  }

  public async execute(
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    this.entity.setData(updateCategoryDto);

    const { categoryId, restaurant } = updateCategoryDto;
    const foundCategory = await this.repository.getOne(categoryId, restaurant);
    const body = this.entity.updateBody(foundCategory);
    const response = await this.repository.update(body);

    return response;
  }
}
