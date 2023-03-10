import { Ingredient } from 'src/domain/entities/ingredient';

export interface DeleteIngredientUseCaseInterface {
  execute(ingredientId: string, restaurantId: string): Promise<Ingredient>;
}
