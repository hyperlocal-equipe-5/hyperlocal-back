import { GetOneRoleUseCaseInterface } from 'src/data/abstract/usecases/role/getOneRoleUseCase-interface';
import { Role } from 'src/domain/entities/role';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneRoleInterface } from 'src/presentation/abstract/controllers/role/getOneRoleController-interface';
import { Response } from 'src/utils/http/response';

export class GetOneRoleController implements GetOneRoleInterface {
  private readonly getOneRoleUseCase: GetOneRoleUseCaseInterface;

  public constructor(getOneRoleUseCase: GetOneRoleUseCaseInterface) {
    this.getOneRoleUseCase = getOneRoleUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>> {
    try {
      const roleId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
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
