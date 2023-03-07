import { GetAllCategoriesUseCaseInterface } from "src/data/abstract/usecases/category/getAllCategoriesUseCase-interface";
import { Category } from "src/domain/entities/category";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetAllCategoriesInterface } from "src/presentation/abstract/controllers/category/getAllCategoriesController-interface";
import { Response } from "src/utils/http/response";

export class GetAllCategoriesController implements GetAllCategoriesInterface{
  private readonly getAllcategoriesUseCase: GetAllCategoriesUseCaseInterface;
  public constructor(getAllcategoriesUseCase: GetAllCategoriesUseCaseInterface){
    this.getAllcategoriesUseCase =getAllcategoriesUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Category[]>> {
    try {
      const restaurantId = httpRequest.restaurant
      const allCategories = await this.getAllcategoriesUseCase.execute(restaurantId)

      return Response.ok(allCategories)
    } catch (error) {
      return Response.notFound(error)
    }
  }
}
