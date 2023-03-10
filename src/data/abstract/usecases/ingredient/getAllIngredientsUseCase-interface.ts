import { Ingredient } from 'src/domain/entities/ingredient';

export interface GetAllIngredientsUseCaseInterface {
  execute(restaurantId: string): Promise<Ingredient[]>;
}
