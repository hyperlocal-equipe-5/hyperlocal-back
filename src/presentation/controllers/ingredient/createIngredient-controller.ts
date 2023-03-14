import { CreateIngredientUseCaseInterface } from 'src/data/abstract/usecases/ingredient/createIngredientUseCase-interface';
import { Ingredient } from 'src/domain/entities/ingredient';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateIngredientInterface } from 'src/presentation/abstract/controllers/ingredient/createIngredientController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class CreateIngredientController implements CreateIngredientInterface {
  private readonly createIngredientUseCase: CreateIngredientUseCaseInterface;

  public constructor(
    createIngredientUseCase: CreateIngredientUseCaseInterface,
  ) {
    this.createIngredientUseCase = createIngredientUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Ingredient>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'createIngredients')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const createIngredientDto = httpRequest.body;
      const createdIngredient = await this.createIngredientUseCase.execute(
        createIngredientDto,
      );

      return Response.created(createdIngredient);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
