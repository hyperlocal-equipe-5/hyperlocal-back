import { GetOneProductUseCaseInterface } from "src/data/abstract/usecases/product/getOneProductUseCase-interface";
import { Product } from "src/domain/entities/product";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetOneProductInterface } from "src/presentation/abstract/controllers/product/getOneProductController-interface";
import { Response } from "src/utils/http/response";

export class GetOneProductController implements GetOneProductInterface{
  private readonly getOneProductUseCase: GetOneProductUseCaseInterface;
  public constructor(getOneProductUseCase: GetOneProductUseCaseInterface){
    this.getOneProductUseCase = getOneProductUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Product>> {
    try {
      const productId = httpRequest.id
      const restaurant = httpRequest.restaurant
      const oneProduct = await this.getOneProductUseCase.execute(productId, restaurant)

      return Response.ok(oneProduct)
    } catch (error) {
      return Response.notFound(error.message)
    }
  }
}
