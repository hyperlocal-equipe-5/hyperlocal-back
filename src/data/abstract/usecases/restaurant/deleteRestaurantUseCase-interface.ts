import { Restaurant } from 'src/domain/entities/restaurant';

export interface DeleteRestaurantUseCaseInterface {
  execute(restaurantId: string): Promise<Restaurant>;
}
