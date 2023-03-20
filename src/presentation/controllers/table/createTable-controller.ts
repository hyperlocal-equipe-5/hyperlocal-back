import { CreateTableUseCaseInterface } from 'src/data/abstract/usecases/table/createTableUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateTableInterface } from 'src/presentation/abstract/controllers/table/createTableController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class CreateTableController implements CreateTableInterface {
  private readonly createTableUseCase: CreateTableUseCaseInterface;

  public constructor(createTableUseCase: CreateTableUseCaseInterface) {
    this.createTableUseCase = createTableUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Table>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'createTables')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const createTableDto = httpRequest.body;
      const createdTable = await this.createTableUseCase.execute(
        createTableDto,
      );

      return Response.created(createdTable);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
