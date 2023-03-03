import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantEntityInterface } from './abstract/restaurantEntity-interface';

export class RestaurantEntity implements RestaurantEntityInterface {
  constructor(
    private readonly restaurantDto: CreateRestaurantDto | UpdateRestaurantDto,
  ) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Restaurant {
    throw new Error('Method not implemented.');
  }

  updateBody(mainRestaurant: Restaurant): Restaurant {
    throw new Error('Method not implemented.');
  }
}
