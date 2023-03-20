import { CreateCategoryDto } from 'src/domain/dto/category/createCategory-dto';
import { Category } from 'src/domain/entities/category';

export interface CreateCategoryUseCaseInterface {
  execute(createCategoryDto: CreateCategoryDto): Promise<Category>;
}
