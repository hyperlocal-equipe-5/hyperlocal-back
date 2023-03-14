import { DeleteCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/deleteCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteCategoryInterface } from 'src/presentation/abstract/controllers/category/deleteCategoryController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class DeleteCategoryController implements DeleteCategoryInterface {
  private readonly deleteCategoryUseCase: DeleteCategoryUseCaseInterface;

  public constructor(deleteCategoryUseCase: DeleteCategoryUseCaseInterface) {
    this.deleteCategoryUseCase = deleteCategoryUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Category>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'deleteCategories')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const categoryId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;

      if (!categoryId) {
        return Response.badRequest('Missing entity id.');
      }

      const deletedCategory = await this.deleteCategoryUseCase.execute(
        categoryId,
        restaurantId,
      );

      return Response.ok(deletedCategory);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
