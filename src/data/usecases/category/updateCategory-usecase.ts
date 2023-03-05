import { UpdateCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/updateCategoryUseCase-interface';
import { UpdateCategoryDto } from 'src/domain/dto/category/updateCategory-dto';
import { Category } from 'src/domain/entities/category';

export class UpdateCategoryUseCase implements UpdateCategoryUseCaseInterface {
  execute(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
