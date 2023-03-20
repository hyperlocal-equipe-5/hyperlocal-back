import { GetOneReviewUseCaseInterface } from 'src/data/abstract/usecases/review/getOneReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneReviewInterface } from 'src/presentation/abstract/controllers/review/getOneReviewController-interface';
import { Response } from 'src/utils/http/response';

export class GetOneReviewController implements GetOneReviewInterface {
  private readonly getOneReviewUseCase: GetOneReviewUseCaseInterface;

  public constructor(getOneReviewUseCase: GetOneReviewUseCaseInterface) {
    this.getOneReviewUseCase = getOneReviewUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Review>> {
    try {
      const reviewId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;

      if (!reviewId) {
        return Response.badRequest('Missing entity id.');
      }

      const oneReview = await this.getOneReviewUseCase.execute(
        reviewId,
        restaurantId,
      );

      return Response.ok(oneReview);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
