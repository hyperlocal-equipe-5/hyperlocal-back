import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientType } from '../../../domain/types/ingredint-type';

export interface IngredientEntityInterface {
  validate(): void;
  getBody(): IngredientType;
  updateBody(mainIngredient: Ingredient): IngredientType;
}
