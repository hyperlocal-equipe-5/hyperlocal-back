import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';

export interface RestaurantEntityInterface {
  validate(): void;
  getBody(): Restaurant;
  updateBody(mainRestaurant: Restaurant): Restaurant;
}
