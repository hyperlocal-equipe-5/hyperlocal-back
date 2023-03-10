import { GetOneRestaurantUseCase } from 'src/data/usecases/restaurant/getOneRestaurant-usecase';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { GetOneRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/getOneRestaurantController-interface';
import { GetOneRestaurantController } from 'src/presentation/controllers/restaurant/getOneRestaurant-controller';

export function makeGetOneRestaurantFactory(): GetOneRestaurantInterface {
  const repository = new RestaurantRepository();
  const getOneRestaurantUseCase = new GetOneRestaurantUseCase(repository);

  return new GetOneRestaurantController(getOneRestaurantUseCase);
}
