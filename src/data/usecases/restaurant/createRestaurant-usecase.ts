import { CreateRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/createRestaurantUseCase-interface';
import { CreateRestaurantDto } from 'src/domain/dto/restaurant/createRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantEntityInterface } from 'src/entities/abstract/interfaces/restaurantEntity-interface';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';

export class CreateRestaurantUseCase
  implements CreateRestaurantUseCaseInterface
{
  private readonly entity: RestaurantEntityInterface;
  private readonly repository: RestaurantRepositoryInterface;

  public constructor(
    entity: RestaurantEntityInterface,
    repository: RestaurantRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    this.entity.setData(createRestaurantDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
