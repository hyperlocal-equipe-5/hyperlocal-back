import { GetAllRestaurantsUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getAllRestaurantsUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';

export class GetAllRestaurantsUseCase
  implements GetAllRestaurantsUseCaseInterface
{
  private readonly repository: RestaurantRepositoryInterface;

  public constructor(repository: RestaurantRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(): Promise<Restaurant[]> {
    const data = await this.repository.getAll();

    return data;
  }
}
