import { CreateCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/createCategoryUseCase-interface';
import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { Category } from 'src/domain/entities/category';
import { CategoryEntityInterface } from 'src/entities/abstract/interfaces/categoryEntity-interface';
import { CategoryRepositoryInterface } from 'src/infra/abstract/repositories/categoryRepositor-interface';

export class CreateCategoryUseCase implements CreateCategoryUseCaseInterface {
  private readonly repository: CategoryRepositoryInterface;
  private readonly entity: CategoryEntityInterface;

  public constructor(repository: CategoryRepositoryInterface) {
    this.repository = repository;
  }

  public execute(createCategoryDto: CreateCategoryDto): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
