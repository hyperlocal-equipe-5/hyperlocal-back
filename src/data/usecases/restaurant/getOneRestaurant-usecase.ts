import { GetOneRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getOneRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';

export class GetOneRestaurantUseCase
  implements GetOneRestaurantUseCaseInterface
{
  public execute(restaurantId: string): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
}
