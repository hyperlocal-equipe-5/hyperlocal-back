import { CreateRestaurantUseCase } from 'src/data/usecases/restaurant/createRestaurant-usecase';
import { RestaurantEntity } from 'src/entities/restaurant-entity';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { CreateRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/createRestaurantController-interface';
import { CreateRestaurantController } from 'src/presentation/controllers/restaurant/createRestaurant-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateRestaurantFactory(): CreateRestaurantInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new RestaurantEntity(idGeneratorAdapter);
  const repository = new RestaurantRepository();
  const createRestaurantUseCase = new CreateRestaurantUseCase(
    entity,
    repository,
  );

  return new CreateRestaurantController(createRestaurantUseCase);
}
