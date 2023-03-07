import { CreateCategoryUseCaseInterface } from "src/data/abstract/usecases/category/createCategoryUseCase-interface";
import { Category } from "src/domain/entities/category";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { CreateCategoryInterface } from "src/presentation/abstract/controllers/category/createCategoryController-interface";
import { Response } from "src/utils/http/response";

export class CreateCategoryController implements CreateCategoryInterface{
  private readonly createCategoryUseCase: CreateCategoryUseCaseInterface;
  public constructor(createCategoryUseCase: CreateCategoryUseCaseInterface){
    this.createCategoryUseCase = createCategoryUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Category>> {
    try {
      const createCategoryDto = httpRequest.body
      const createdCategory = await this.createCategoryUseCase.execute(createCategoryDto)

      return Response.created(createdCategory)
    } catch (error) {
      return Response.badRequest(error)
    }
  }
}
