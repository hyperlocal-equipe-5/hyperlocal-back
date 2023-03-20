import { GetAllUsersUseCaseInterface } from 'src/data/abstract/usecases/user/getAllUsersUseCase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllUsersControllerInterface } from 'src/presentation/abstract/controllers/user/getAllUsersController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class GetAllUsersController implements GetAllUsersControllerInterface {
  private readonly getAllUsersUserCase: GetAllUsersUseCaseInterface;

  public constructor(getAllUserUsecase: GetAllUsersUseCaseInterface) {
    this.getAllUsersUserCase = getAllUserUsecase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<User[]>> {
    try {
      const restaurantId = httpRequest.restaurant;

      if (!restaurantId) {
        return Response.badRequest('Missing restaurant id.');
      }

      const getAllUser = await this.getAllUsersUserCase.execute(restaurantId);
      return Response.ok(getAllUser);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
