import { DeleteRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/deleteRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';

export class DeleteRestaurantUseCase
  implements DeleteRestaurantUseCaseInterface
{
  private readonly repository: RestaurantRepositoryInterface;

  public constructor(repository: RestaurantRepositoryInterface) {
    this.repository = repository;
  }

  public execute(restaurantId: string): Promise<Restaurant> {
    const deleted = this.repository.delete(restaurantId);

    return deleted;
  }
}
