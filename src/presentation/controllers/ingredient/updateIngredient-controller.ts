import { UpdateIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/updateIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/updateIngredientController-interface';
import { Response } from 'src/utils/http/response';

export class UpdateIngredientController implements UpdateIngredientInterface {
  private readonly updateIngredientUseCase: UpdateIngredientUseCaseInterface;

  public constructor(
    updateIngredientUseCase: UpdateIngredientUseCaseInterface,
  ) {
    this.updateIngredientUseCase = updateIngredientUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Ingredient>> {
    try {
      const updateIngredientDto = httpRequest.body;
      const updatedIngredient = await this.updateIngredientUseCase.execute(
        updateIngredientDto,
      );

      return Response.ok(updatedIngredient);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
