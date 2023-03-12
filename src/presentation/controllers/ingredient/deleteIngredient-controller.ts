import { DeleteIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/deleteIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/deleteIngredientController-interface';
import { Response } from 'src/utils/http/response';

export class DeleteIngredientController implements DeleteIngredientInterface {
  private readonly deleteIngredientUseCase: DeleteIngredientUseCaseInterface;

  public constructor(
    deleteIngredientUseCase: DeleteIngredientUseCaseInterface,
  ) {
    this.deleteIngredientUseCase = deleteIngredientUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Ingredient>> {
    try {
      const ingredientId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const deletedIngredient = await this.deleteIngredientUseCase.execute(
        ingredientId,
        restaurantId,
      );

      return Response.ok(deletedIngredient);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
