import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';

export interface CreateIngredientUseCaseInterface {
  execute(createIngredientDto: CreateIngredientDto): Promise<Ingredient>;
}
