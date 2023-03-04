import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';

export interface UpdateIngredientUseCaseInterface {
  execute(updateIngredientDto: UpdateIngredientDto): Promise<Ingredient>;
}
