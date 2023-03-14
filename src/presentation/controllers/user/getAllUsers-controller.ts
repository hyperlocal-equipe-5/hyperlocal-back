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
      const loggedUser: User = httpRequest.body.loggedUser;
      if (UserPermissionValidator.validate(loggedUser, 'readUsers')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const getAllUsers = httpRequest.restaurant;
      const getAllUser = await this.getAllUsersUserCase.execute(getAllUsers);
      return Response.ok(getAllUser);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
