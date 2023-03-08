import { CreateTableUseCaseInterface } from "src/data/abstract/usecases/table/createTableUseCase-interface";
import { Table } from "src/domain/entities/table";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { CreateTableInterface } from "src/presentation/abstract/controllers/table/createTableController-interface";
import { Response } from "src/utils/http/response";

export class createTablerController implements CreateTableInterface{
private readonly createTableUseCase: CreateTableUseCaseInterface
public constructor(createTableUseCase: CreateTableUseCaseInterface){
  this.createTableUseCase = createTableUseCase
}
  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Table>> {
    try {
      const createTableDto = httpRequest.body
      const createdTable = await this.createTableUseCase.execute(createTableDto)

      return Response.created(createdTable)
    } catch (error) {
      return Response.badRequest(error.message)
    }
  }
}
