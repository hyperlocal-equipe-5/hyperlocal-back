import { UpdateRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/updateRestaurantUseCase-interface';
import { UpdateRestaurantDto } from 'src/domain/dto/restaurant/updateRestaurant-dto';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantEntityInterface } from 'src/entities/abstract/interfaces/restaurantEntity-interface';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';

export class UpdateRestaurantUseCase
  implements UpdateRestaurantUseCaseInterface
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
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    this.entity.setData(updateRestaurantDto);

    const { id } = updateRestaurantDto;
    const fountEntity = await this.repository.getOne(id);
    const body = this.entity.updateBody(fountEntity);
    const response = await this.repository.update(body);

    return response;
  }
}
