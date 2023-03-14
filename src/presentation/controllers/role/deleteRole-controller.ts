import { DeleteRoleUseCaseInterface } from 'src/data/abstract/usecases/role/deleteRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteRoleInterface } from 'src/presentation/abstract/controllers/role/deleteRoleController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class DeleteRoleController implements DeleteRoleInterface {
  private readonly deleteRoleUseCase: DeleteRoleUseCaseInterface;

  public constructor(deleteRoleUseCase: DeleteRoleUseCaseInterface) {
    this.deleteRoleUseCase = deleteRoleUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'deleteRoles')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const roleId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const deletedRole = await this.deleteRoleUseCase.execute(
        roleId,
        restaurantId,
      );

      return Response.ok(deletedRole);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
