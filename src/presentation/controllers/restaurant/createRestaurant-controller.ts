import { CreateRestaurantUseCaseInterface } from 'src/data/abstract/usecases/restaurant/createRestaurantUseCase-interface';
import { Restaurant } from 'src/domain/entities/restaurant';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';
import { CreateRestaurantInterface } from '../../abstract/controllers/restaurant/createRestaurantController-interface';

export class CreateRestaurantController implements CreateRestaurantInterface {
  private readonly createRestaurantUserCase: CreateRestaurantUseCaseInterface;

  public constructor(
    createRestaurantUserCase: CreateRestaurantUseCaseInterface,
  ) {
    this.createRestaurantUserCase = createRestaurantUserCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Restaurant>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'createRestaurants')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const createRestaurantDto = httpRequest.body;
      const createdRestaurant = await this.createRestaurantUserCase.execute(
        createRestaurantDto,
      );

      return Response.created(createdRestaurant);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
