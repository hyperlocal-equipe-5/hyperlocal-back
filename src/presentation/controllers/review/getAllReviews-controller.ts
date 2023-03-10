import { GetAllReviewsUseCaseInterface } from 'src/data/abstract/usecases/review/getAllReviewsUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllReviewsInterface } from 'src/presentation/abstract/controllers/review/getAllReviewsController-interface';
import { Response } from 'src/utils/http/response';

export class GetAllReviewsController implements GetAllReviewsInterface {
  private readonly getAllReviewsUseCase: GetAllReviewsUseCaseInterface;
  public constructor(getAllReviewsUseCase: GetAllReviewsUseCaseInterface) {
    this.getAllReviewsUseCase = getAllReviewsUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Review[]>> {
    try {
      const restaurantId = httpRequest.restaurant;
      const allReviews = await this.getAllReviewsUseCase.execute(restaurantId);

      return Response.ok(allReviews);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
