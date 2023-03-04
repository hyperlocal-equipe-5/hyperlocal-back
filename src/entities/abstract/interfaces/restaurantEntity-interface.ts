import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantType } from '../types/restaurant-type';

export interface RestaurantEntityInterface {
  validate(): void;
  getBody(): RestaurantType;
  updateBody(mainRestaurant: Restaurant): RestaurantType;
}