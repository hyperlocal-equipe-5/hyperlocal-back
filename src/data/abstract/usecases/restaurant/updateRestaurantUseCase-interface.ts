import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';

export interface UpdateRestaurantUseCaseInterface {
  execute(updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant>;
}
