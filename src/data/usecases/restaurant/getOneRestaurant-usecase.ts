import { GetOneRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getOneRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';

export class GetOneRestaurantUseCase
  implements GetOneRestaurantUseCaseInterface
{
  private readonly repository: RestaurantRepositoryInterface;

  public constructor(repository: RestaurantRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Restaurant> {
    const data = await this.repository.getOne(restaurantId);

    return data;
  }
}
