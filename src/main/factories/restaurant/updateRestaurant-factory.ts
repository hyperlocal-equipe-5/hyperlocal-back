import { UpdateRestaurantUseCase } from 'src/data/usecases/restaurant/updateRestaurant-usecase';
import { RestaurantEntity } from 'src/entities/restaurant-entity';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { UpdateRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/updateRestaurantController-interface';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateRestaurantFactory(): UpdateRestaurantInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new RestaurantEntity(idGeneratorAdapter);
  const repository = new RestaurantRepository();
  const updateRestaurantUseCase = new UpdateRestaurantUseCase(
    entity,
    repository,
  );

  return new UpdateRestaurantController(updateRestaurantUseCase);
}
