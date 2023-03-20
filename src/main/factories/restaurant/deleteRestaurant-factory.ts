import { DeleteRestaurantUseCase } from 'src/data/usecases/restaurant/deleteRestaurant-usecase';
import { RestaurantRepository } from 'src/infra/repositories/restaurant-repository';
import { DeleteRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/deleteRestaurantController-interface';
import { DeleteRestaurantController } from 'src/presentation/controllers/restaurant/deleteRestaurant-controller';

export function makeDeleteRestaurantFactory(): DeleteRestaurantInterface {
  const repository = new RestaurantRepository();
  const deleteRestaurantUseCase = new DeleteRestaurantUseCase(repository);

  return new DeleteRestaurantController(deleteRestaurantUseCase);
}
