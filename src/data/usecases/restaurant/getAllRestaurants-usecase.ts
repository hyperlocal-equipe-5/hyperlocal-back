import { GetAllRestaurantsUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getAllRestaurantsUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';

export class GetAllRestaurantsUseCase
  implements GetAllRestaurantsUseCaseInterface
{
  public execute(): Promise<Restaurant[]> {
    throw new Error('Method not implemented.');
  }
}
