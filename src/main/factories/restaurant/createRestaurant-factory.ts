import { CreateRestaurantUseCase } from 'src/data/usecases/restaurant/createRestaurant-usecase';
import { GetRestaurantReferenceNumberUseCase } from 'src/data/usecases/restaurant/getRestaurantReferenceNumber-usecase';
import { RestaurantEntity } from 'src/entities/restaurant-entity';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { CreateRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/createRestaurantController-interface';
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateRestaurantFactory(): CreateRestaurantInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const restaurantRepository = new RestaurantRepository();
  const getRestaurantReferenceNumber = new GetRestaurantReferenceNumberUseCase(
    restaurantRepository,
  );
  const entity = new RestaurantEntity(
    idGeneratorAdapter,
    getRestaurantReferenceNumber,
  );
  const createRestaurantUseCase = new CreateRestaurantUseCase(
    entity,
    restaurantRepository,
  );

  return new CreateRestaurantController(createRestaurantUseCase);
}
