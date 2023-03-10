import { CreateIngredientDto } from 'src/domain/dto/ingredient/createIngredient-dto';
import { UpdateIngredientDto } from 'src/domain/dto/ingredient/updateIngredient-dto';
import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientType } from '../../../domain/types/ingredint-type';

export interface IngredientEntityInterface {
  setData(ingredientDto: CreateIngredientDto | UpdateIngredientDto): void;
  validate(): void;
  getBody(): IngredientType;
  updateBody(mainIngredient: Ingredient): IngredientType;
}
