import { DeleteCategoryUseCaseInterface } from "src/data/abstract/usecases/category/deleteCategoryUseCase-interface";
import { Category } from "src/domain/entities/category";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { DeleteCategoryInterface } from "src/presentation/abstract/controllers/category/deleteCategoryController-interface";
import { Response } from "src/utils/http/response";

export class DeleteCategoryController implements DeleteCategoryInterface{
  private readonly deleteCategoryUseCase: DeleteCategoryUseCaseInterface;
  public constructor(deleteCategoryUseCase: DeleteCategoryUseCaseInterface){
    this.deleteCategoryUseCase = deleteCategoryUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Category>> {
    try {
      const categoryId = httpRequest.id
      const restaurantId = httpRequest.restaurant
      const deletedCategory =  await this.deleteCategoryUseCase.execute(categoryId, restaurantId)

      return Response.ok(deletedCategory)
    } catch (error) {
      return Response.notFound(error.message)
    }
  }
}
