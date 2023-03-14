import { UpdateUserUseCaseInterface } from 'src/data/abstract/usecases/user/updateUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateUserControllerInterface } from 'src/presentation/abstract/controllers/user/updateUserController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateUserController implements UpdateUserControllerInterface {
  private readonly updateUserUseCase: UpdateUserUseCaseInterface;

  public constructor(updateUserUseCase: UpdateUserUseCaseInterface) {
    this.updateUserUseCase = updateUserUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<User>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      const roleAccess = httpRequest.body.role ? true : false;
      if (
        roleAccess &&
        !UserPermissionValidator.validate(loggedUser, 'defineAccess')
      ) {
        return Response.unauthorized(
          'This user has no permition to define roles.',
        );
      }

      const updateUserDto = httpRequest.body;
      const updatedUser = await this.updateUserUseCase.execute(updateUserDto);

      return Response.ok(updatedUser);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
