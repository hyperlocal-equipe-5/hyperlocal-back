import { GetRestaurantReferenceNumberUseCase } from 'src/data/usecases/restaurant/getRestaurantReferenceNumber-usecase';
import { UpdateRestaurantUseCase } from 'src/data/usecases/restaurant/updateRestaurant-usecase';
import { RestaurantEntity } from 'src/entities/restaurant-entity';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { UpdateRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/updateRestaurantController-interface';
import { UpdateRestaurantController } from 'src/presentation/controllers/restaurant/updateRestaurant-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateRestaurantFactory(): UpdateRestaurantInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const restaurantRepository = new RestaurantRepository();
  const getRestaurantReferenceNumber = new GetRestaurantReferenceNumberUseCase(
    restaurantRepository,
  );
  const entity = new RestaurantEntity(
    idGeneratorAdapter,
    getRestaurantReferenceNumber,
  );
  const updateRestaurantUseCase = new UpdateRestaurantUseCase(
    entity,
    restaurantRepository,
  );

  return new UpdateRestaurantController(updateRestaurantUseCase);
}
