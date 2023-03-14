import { CreateUserUseCaseInterface } from 'src/data/abstract/usecases/user/createUserUsecase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateUserControllerInterface } from 'src/presentation/abstract/controllers/user/createUserController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class CreateUserController implements CreateUserControllerInterface {
  private readonly createUserUseCase: CreateUserUseCaseInterface;

  public constructor(createUserUseCase: CreateUserUseCaseInterface) {
    this.createUserUseCase = createUserUseCase;
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

      const createUserDto = httpRequest.body;
      const createdUser = await this.createUserUseCase.execute(createUserDto);

      return Response.created(createdUser);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
