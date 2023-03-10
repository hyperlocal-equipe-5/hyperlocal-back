import { Ingredient } from 'src/domain/entities/ingredient';
import { IngredientType } from 'src/domain/types/ingredint-type';

export interface IngredientRepositoryInterface {
  create(ingredientBody: IngredientType): Promise<Ingredient>;
  delete(ingredientId: string, restaurantId: string): Promise<Ingredient>;
  getOne(ingredientId: string, restaurantId: string): Promise<Ingredient>;
  getAll(ingredientId: string): Promise<Ingredient[]>;
  update(ingredientBody: IngredientType): Promise<Ingredient>;
}
