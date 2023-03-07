import { GetAllRolesUseCaseInterface } from "src/data/abstract/usecases/role/getAllRolesUseCase-interface";
import { Role } from "src/domain/entities/role";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetAllRolesInterface } from "src/presentation/abstract/controllers/role/getAllRolesController-interface";
import { Response } from "src/utils/http/response";

export class GetAllRolesController implements GetAllRolesInterface{
  private readonly getAllRolesUseCase: GetAllRolesUseCaseInterface;

  public constructor(getAllRolesUseCase: GetAllRolesUseCaseInterface){
    this.getAllRolesUseCase = getAllRolesUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role[]>> {
    try {
      const restaurantId = httpRequest.restaurant
      const allRoles = await this.getAllRolesUseCase.execute(restaurantId)
      return Response.ok(allRoles)
    } catch (error) {
      return Response.badRequest(error.message)
    }
  }
}