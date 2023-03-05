import { DeleteRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/deleteRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';

export class DeleteRestaurantUseCase
  implements DeleteRestaurantUseCaseInterface
{
  public execute(restaurantId: string): Promise<Restaurant> {
    throw new Error('Method not implemented.');
  }
}
