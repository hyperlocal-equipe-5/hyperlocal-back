import { DeleteTableUseCaseInterface } from 'src/data/abstract/usecases/table/deleteTableUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteTableInterface } from 'src/presentation/abstract/controllers/table/deleteTableController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class DeleteTableController implements DeleteTableInterface {
  private readonly deleteTableUseCase: DeleteTableUseCaseInterface;

  public constructor(deleteTableUseCase: DeleteTableUseCaseInterface) {
    this.deleteTableUseCase = deleteTableUseCase;
  }
  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Table>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'deleteTables')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const tableId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const deletedTable = await this.deleteTableUseCase.execute(
        tableId,
        restaurantId,
      );

      return Response.ok(deletedTable);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
