import { GetOneIngredientUseCaseInterface } from "src/data/abstract/usecases/ingredient/getOneIngredientUseCase-interface";
import { Ingredient } from "src/domain/entities/ingredient";
import { HttpRequest } from "src/domain/http/httpRequest";
import { HttpResponse } from "src/domain/http/httpResponse";
import { GetOneIngredientInterface } from "src/presentation/abstract/controllers/ingredient/getOneIngredientController-interface";
import { Response } from "src/utils/http/response";

export class GetOneIngredientController implements GetOneIngredientInterface{
  private readonly getOneIngredientUseCase: GetOneIngredientUseCaseInterface;
  public constructor(getOneIngredientUseCase: GetOneIngredientUseCaseInterface){
    this.getOneIngredientUseCase = getOneIngredientUseCase
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<Ingredient>> {
    try {
      const ingredientId = httpRequest.id
      const restaurantId = httpRequest.restaurant
      const oneIngredient = await this.getOneIngredientUseCase.execute(ingredientId,restaurantId)

      return Response.ok(oneIngredient)
    } catch (error) {
      return Response.notFound(error.message)
    }
  }


}
