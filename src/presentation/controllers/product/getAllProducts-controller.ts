import { GetAllProductsUseCaseInterface } from "src/data/abstract/usecases/product/getAllProductsUseCase-interace";
import { Product } from "src/domain/entities/product";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetAllProductsInterface } from "src/presentation/abstract/controllers/product/getAllProductsController-interface";
import { Response } from "src/utils/http/response";

export class GetAllProductsController implements GetAllProductsInterface{
  private readonly getAllProductsUseCase: GetAllProductsUseCaseInterface;
  public constructor(getAllProductsUseCase: GetAllProductsUseCaseInterface){
    this.getAllProductsUseCase = getAllProductsUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Product[]>> {
    try {
      const restaurantId = httpRequest.restaurant
      const allProducts =  await this.getAllProductsUseCase.execute(restaurantId)

      return Response.ok(allProducts)
    } catch (error) {
      return Response.notFound(error.message)
    }
  }
}
