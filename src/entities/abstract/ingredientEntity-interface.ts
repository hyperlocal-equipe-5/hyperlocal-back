import { Ingredient } from 'src/domain/entities/ingredient';

export interface IngredientEntityInterface {
  validate(): void;
  getBody(): Ingredient;
  updateBody(): Ingredient;
}
