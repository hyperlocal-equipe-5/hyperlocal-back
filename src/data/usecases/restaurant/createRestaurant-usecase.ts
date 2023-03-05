import { CreateRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/createRestaurantUseCase-interface';
import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';

export class CreateRestaurantUseCase
  implements CreateRestaurantUseCaseInterface
{
  public execute(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
}
