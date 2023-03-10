import { Restaurant } from 'src/domain/entities/restaurant';

export interface GetOneRestaurantUseCaseInterface {
  execute(restaurantId: string): Promise<Restaurant>;
}
