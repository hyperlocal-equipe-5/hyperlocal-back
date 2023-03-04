import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';

export interface CreateRestaurantUseCaseInterface {
  execute(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
}
