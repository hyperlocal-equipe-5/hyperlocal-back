import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';

export interface UpdateCategoryUseCaseInterface {
  execute(updateCategoryDto: UpdateCategoryDto): Promise<Category>;
}
