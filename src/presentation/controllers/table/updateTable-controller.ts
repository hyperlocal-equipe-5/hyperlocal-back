import { UpdateTableUseCaseInterface } from 'src/data/abstract/usecases/table/updateTableUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateTableInterface } from 'src/presentation/abstract/controllers/table/updateTableController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateTableController implements UpdateTableInterface {
  private readonly updateTableUseCase: UpdateTableUseCaseInterface;

  public constructor(updateTableUseCase: UpdateTableUseCaseInterface) {
    this.updateTableUseCase = updateTableUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Table>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'updateTables')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const updateTableDto = httpRequest.body;
      const updatedTable = await this.updateTableUseCase.execute(
        updateTableDto,
      );

      return Response.ok(updatedTable);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
