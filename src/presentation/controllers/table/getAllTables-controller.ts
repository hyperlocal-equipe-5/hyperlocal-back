import { GetAllTablesUseCaseInterface } from 'src/data/abstract/usecases/table/getAllTablesUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllTablesInterface } from 'src/presentation/abstract/controllers/table/getAllTablesController-interface';
import { Response } from 'src/utils/http/response';

export class GetAllTablesController implements GetAllTablesInterface {
  private readonly getAllTablesUseCase: GetAllTablesUseCaseInterface;

  public constructor(getAllTablesUseCase: GetAllTablesUseCaseInterface) {
    this.getAllTablesUseCase = getAllTablesUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Table[]>> {
    try {
      const restaurantId = httpRequest.restaurant;

      if (!restaurantId) {
        return Response.badRequest('Missing restaurant id.');
      }

      const allTables = await this.getAllTablesUseCase.execute(restaurantId);

      return Response.ok(allTables);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
