import { GetRestaurantReferenceNumberUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getRestaurantReferenceNumberUseCase-interface';
import { RestaurantRepositoryInterface } from 'src/infra/abstract/repositories/restaurantRepository-interface';

export class GetRestaurantReferenceNumberUseCase
  implements GetRestaurantReferenceNumberUseCaseInterface
{
  private readonly restaurantRepository: RestaurantRepositoryInterface;

  public constructor(restaurantRepository: RestaurantRepositoryInterface) {
    this.restaurantRepository = restaurantRepository;
  }

  public async execute(): Promise<number> {
    const restaurants = await this.restaurantRepository.getAll();

    const referenceNumbers = restaurants.map((restaurant) =>
      Number(restaurant.reference),
    );

    const greatestReference = referenceNumbers.sort(
      (item1, item2) => item2 - item1,
    )[0];

    return greatestReference + 1;
  }
}
