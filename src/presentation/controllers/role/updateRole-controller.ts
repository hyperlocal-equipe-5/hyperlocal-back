import { UpdateRoleUseCaseInterface } from 'src/data/abstract/usecases/role/updateRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateRoleInterface } from 'src/presentation/abstract/controllers/role/updateRoleController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateRoleController implements UpdateRoleInterface {
  private readonly updateRoleUseCase: UpdateRoleUseCaseInterface;

  public constructor(updateRoleUseCase: UpdateRoleUseCaseInterface) {
    this.updateRoleUseCase = updateRoleUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'updateRoles')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const updateRoleAdminRequestBody = httpRequest.body;
      const updatedRole = await this.updateRoleUseCase.execute(
        updateRoleAdminRequestBody,
      );
      return Response.ok(updatedRole);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
