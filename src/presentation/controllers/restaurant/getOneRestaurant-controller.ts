import { Res } from "@nestjs/common";
import { GetOneRestaurantUseCaseInterface } from "src/data/abstract/usecases/restaurant/getOneRestaurantUseCase-interface";
import { Restaurant } from "src/domain/entities/restaurant";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetOneRestaurantInterface } from "src/presentation/abstract/controllers/restaurant/getOneRestaurantController-interface";
import { Response } from "src/utils/http/response";

export class GetOneRestaurantController implements GetOneRestaurantInterface{
  private readonly getOneRestaurantUseCase: GetOneRestaurantUseCaseInterface

  public constructor(getOneRestaurantUseCase: GetOneRestaurantUseCaseInterface ){
    this.getOneRestaurantUseCase = getOneRestaurantUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Restaurant>> {
    try {
      const restaurantId = httpRequest.restaurant
      const restaurant = await this.getOneRestaurantUseCase.execute(restaurantId)

      return Response.ok(restaurant)
    } catch (error) {
      return Response.notFound(error.message)
    }
  }
}
