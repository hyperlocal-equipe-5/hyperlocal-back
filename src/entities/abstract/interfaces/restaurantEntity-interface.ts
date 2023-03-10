import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantType } from '../../../domain/types/restaurant-type';

export interface RestaurantEntityInterface {
  setData(restaurantDto: CreateRestaurantDto | UpdateRestaurantDto): void;
  validate(): void;
  getBody(): RestaurantType;
  updateBody(mainRestaurant: Restaurant): RestaurantType;
}
