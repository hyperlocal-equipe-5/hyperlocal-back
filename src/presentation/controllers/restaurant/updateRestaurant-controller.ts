import { UpdateRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/updateRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateRestaurantInterface } from 'src/presentation/abstract/controllers/restaurant/updateRestaurantController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateRestaurantController implements UpdateRestaurantInterface {
  private readonly updateRestaurantUseCase: UpdateRestaurantUseCaseInterface;

  public constructor(
    updateRestaurantUseCase: UpdateRestaurantUseCaseInterface,
  ) {
    this.updateRestaurantUseCase = updateRestaurantUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Restaurant>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'updateRestaurants')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const updateRestaurantDto = httpRequest.body;
      const updatedRestaurant = await this.updateRestaurantUseCase.execute(
        updateRestaurantDto,
      );

      return Response.ok(updatedRestaurant);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
