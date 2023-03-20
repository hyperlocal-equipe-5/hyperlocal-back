import { UpdateCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/updateCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateCategoryInterface } from 'src/presentation/abstract/controllers/category/updateCategoryController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateCategoryController implements UpdateCategoryInterface {
  private readonly updateCategoryUseCase: UpdateCategoryUseCaseInterface;

  public constructor(updateCategoryUseCase: UpdateCategoryUseCaseInterface) {
    this.updateCategoryUseCase = updateCategoryUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Category>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'updateCategories')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const updateCategoryDto = httpRequest.body;
      const updatedCategory = await this.updateCategoryUseCase.execute(
        updateCategoryDto,
      );

      return Response.ok(updatedCategory);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
