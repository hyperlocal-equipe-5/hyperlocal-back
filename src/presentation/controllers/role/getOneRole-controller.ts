import { GetOneRoleUseCaseInterface } from 'src/data/abstract/usecases/role/getOneRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneRoleInterface } from 'src/presentation/abstract/controllers/role/getOneRoleController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class GetOneRoleController implements GetOneRoleInterface {
  private readonly getOneRoleUseCase: GetOneRoleUseCaseInterface;

  public constructor(getOneRoleUseCase: GetOneRoleUseCaseInterface) {
    this.getOneRoleUseCase = getOneRoleUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (UserPermissionValidator.validate(loggedUser, 'readRoles')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const roleId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;

      if (!roleId) {
        return Response.badRequest('Missing entity id.');
      }

      const oneRole = await this.getOneRoleUseCase.execute(
        roleId,
        restaurantId,
      );
      return Response.ok(oneRole);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
