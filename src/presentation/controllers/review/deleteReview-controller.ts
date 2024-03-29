import { DeleteReviewUseCaseInterface } from 'src/data/abstract/usecases/review/deleteReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteReviewInterface } from 'src/presentation/abstract/controllers/review/deleteReviewController-interface';
import { Response } from 'src/utils/http/response';

export class DeleteReviewController implements DeleteReviewInterface {
  private readonly deleteReviewUseCase: DeleteReviewUseCaseInterface;

  public constructor(deleteReviewUseCase: DeleteReviewUseCaseInterface) {
    this.deleteReviewUseCase = deleteReviewUseCase;
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

      const deletedReview = await this.deleteReviewUseCase.execute(
        reviewId,
        restaurantId,
      );

      return Response.ok(deletedReview);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
