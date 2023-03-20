import { Ingredient } from 'src/domain/entities/ingredient';

export interface GetOneIngredientUseCaseInterface {
  execute(ingreditnId: string, restaurantId: string): Promise<Ingredient>;
}
