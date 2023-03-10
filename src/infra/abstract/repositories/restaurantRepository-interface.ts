import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantType } from 'src/domain/types/restaurant-type';

export interface RestaurantRepositoryInterface {
  create(restaurantBody: RestaurantType): Promise<Restaurant>;
  delete(restaurantId: string): Promise<Restaurant>;
  getOne(restaurantId: string): Promise<Restaurant>;
  getAll(): Promise<Restaurant[]>;
  update(restaurantBody: RestaurantType): Promise<Restaurant>;
}
