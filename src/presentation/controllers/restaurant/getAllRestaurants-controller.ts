import { GetAllRestaurantsUseCaseInterface } from 'src/data/abstract/usecases/restaurant/getAllRestaurantsUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllRestaurantsInterface } from 'src/presentation/abstract/controllers/restaurant/getAllRestaurantsController-interface';
import { Response } from 'src/utils/http/response';

export class GetAllRestaurantsController implements GetAllRestaurantsInterface {
  private readonly getAllRestaurantsUseCase: GetAllRestaurantsUseCaseInterface;

  public constructor(
    getAllRestaurantsUseCase: GetAllRestaurantsUseCaseInterface,
  ) {
    this.getAllRestaurantsUseCase = getAllRestaurantsUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Restaurant[]>> {
    try {
      const allRestaurants = await this.getAllRestaurantsUseCase.execute();

      return Response.ok(allRestaurants);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
