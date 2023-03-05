import { CreateCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/createCategoryUseCase-interface';
import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { Category } from 'src/domain/entities/category';

export class CreateCategoryUseCase implements CreateCategoryUseCaseInterface {
  public execute(createCategoryDto: CreateCategoryDto): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
