import { GetAllIngredientsUseCaseInterface } from 'src/data/abstract/usecases/ingredient/getAllIngredientsUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllIngredientsInterface } from 'src/presentation/abstract/controllers/ingredient/getAllIngredientsController-interface';
import { Response } from 'src/utils/http/response';

export class GetAllIngredientsController implements GetAllIngredientsInterface {
  private readonly getAllIngredientsUseCase: GetAllIngredientsUseCaseInterface;
  public constructor(
    getAllIngredientsUseCase: GetAllIngredientsUseCaseInterface,
  ) {
    this.getAllIngredientsUseCase = getAllIngredientsUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Ingredient[]>> {
    try {
      const restaurantId = httpRequest.restaurant;
      const AllIngredients = await this.getAllIngredientsUseCase.execute(
        restaurantId,
      );

      return Response.ok(AllIngredients);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
