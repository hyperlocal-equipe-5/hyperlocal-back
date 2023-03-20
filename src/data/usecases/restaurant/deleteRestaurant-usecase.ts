import { DeleteRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/deleteRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteRestaurantUseCase
  implements DeleteRestaurantUseCaseInterface
{
  private readonly repository: RestaurantRepositoryInterface;

  public constructor(repository: RestaurantRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Restaurant> {
    const fountEntity = await this.repository.getOne(restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(restaurantId);

    return deleted;
  }
}
