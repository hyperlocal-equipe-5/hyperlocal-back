import { CreateCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/createCategoryUseCase-interface';
import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { Category } from 'src/domain/entities/category';
import { CategoryEntityInterface } from 'src/entities/abstract/interfaces/categoryEntity-interface';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';

export class CreateCategoryUseCase implements CreateCategoryUseCaseInterface {
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
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    this.entity.setData(createCategoryDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
