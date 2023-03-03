import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';

export interface IngredientEntityInterface {
  validate(): void;
  getBody(): Ingredient;
  updateBody(mainIngredient: Ingredient): Ingredient;
}
