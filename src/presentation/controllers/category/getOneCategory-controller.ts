import { GetOneCategoryUseCaseInterface } from 'src/data/abstract/usecases/category/getOneCategoryUseCase-interface';
import { Category } from 'src/domain/entities/category';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneCategoryInterface } from 'src/presentation/abstract/controllers/category/getOneCategoryController-interface';
import { Response } from 'src/utils/http/response';

export class GetOneCategoryController implements GetOneCategoryInterface {
  private readonly getOneCategoryUseCase: GetOneCategoryUseCaseInterface;

  public constructor(getOneCategoryUseCase: GetOneCategoryUseCaseInterface) {
    this.getOneCategoryUseCase = getOneCategoryUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Category>> {
    try {
      const categoryId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;

      if (!categoryId) {
        return Response.badRequest('Missing entity id.');
      }

      const oneCategory = await this.getOneCategoryUseCase.execute(
        categoryId,
        restaurantId,
      );

      return Response.ok(oneCategory);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
