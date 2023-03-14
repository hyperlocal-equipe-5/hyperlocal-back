import { CreateRoleUseCaseInterface } from 'src/data/abstract/usecases/role/createRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateRoleInterface } from 'src/presentation/abstract/controllers/role/createRoleController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class CreateRoleController implements CreateRoleInterface {
  private readonly createRoleUserCase: CreateRoleUseCaseInterface;

  public constructor(createRoleUserCase: CreateRoleUseCaseInterface) {
    this.createRoleUserCase = createRoleUserCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'createRoles')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const createRoleDto = httpRequest.body;
      const createdRole = await this.createRoleUserCase.execute(createRoleDto);
      return Response.created(createdRole);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
