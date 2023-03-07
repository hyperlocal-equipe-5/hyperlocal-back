import { CreateRoleUseCaseInterface } from "src/data/abstract/usecases/role/createRoleUseCase-interface";
import { Role } from "src/domain/entities/role";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { CreateRoleInterface } from "src/presentation/abstract/controllers/role/createRoleController-interface";
import { Response } from "src/utils/http/response";

export class CreateRoleController implements CreateRoleInterface{
  private readonly createRoleUserCase: CreateRoleUseCaseInterface;
  public constructor(createRoleUserCase:CreateRoleUseCaseInterface){
    this.createRoleUserCase = createRoleUserCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>> {
    try {
      const createRoleDto = httpRequest.body
      const createdRole = await this.createRoleUserCase.execute(createRoleDto)
      return Response.created(createdRole)
    } catch (error) {
      return Response.badRequest(error.message)
    }
  }
}

