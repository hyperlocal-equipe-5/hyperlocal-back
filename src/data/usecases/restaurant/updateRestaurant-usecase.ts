import { UpdateRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/updateRestaurantUseCase-interface';
import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';

export class UpdateRestaurantUseCase
  implements UpdateRestaurantUseCaseInterface
{
  public execute(
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
}
