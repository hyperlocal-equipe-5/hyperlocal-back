import { DeleteRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/deleteRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/deleteRestaurantController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class DeleteRestaurantController implements DeleteRestaurantInterface {
  private readonly deleteRestaurantUseCase: DeleteRestaurantUseCaseInterface;

  public constructor(
    deleteRestaurantUseCase: DeleteRestaurantUseCaseInterface,
  ) {
    this.deleteRestaurantUseCase = deleteRestaurantUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Restaurant>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'deleteRestaurants')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const restaurantId = httpRequest.id;

      if (!restaurantId) {
        return Response.badRequest('Missing restaurant id.');
      }

      const deletedRestaurant = await this.deleteRestaurantUseCase.execute(
        restaurantId,
      );

      return Response.ok(deletedRestaurant);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
