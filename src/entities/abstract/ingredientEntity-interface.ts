import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';

export interface IngredientEntityInterface {
  constructor(ingredientDto: CreateIngredientDto | UpdateIngredientDto): void;
  validate(): void;
  getBody(): Ingredient;
  updateBody(mainIngredient: Ingredient): Ingredient;
}
