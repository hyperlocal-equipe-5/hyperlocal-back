import { GetOneTableUseCaseInterface } from "src/data/abstract/usecases/table/getOneTableUseCase-interface";
import { Table } from "src/domain/entities/table";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetOneTableInterface } from "src/presentation/abstract/controllers/table/getOneTableController-interface";
import { Response } from "src/utils/http/response";

export class getOneTableController implements GetOneTableInterface{
private readonly getOneTableUseCase: GetOneTableUseCaseInterface
public constructor(getOneTableUseCase: GetOneTableUseCaseInterface){
  this.getOneTableUseCase = getOneTableUseCase
}

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Table>> {
    try {
      const tableId = httpRequest.id
      const restaurantId = httpRequest.restaurant
      const oneTable = await this.getOneTableUseCase.execute(tableId, restaurantId)

      return Response.ok(oneTable)
    } catch (error) {
      return Response.notFound(error.message)
    }
  }
}
