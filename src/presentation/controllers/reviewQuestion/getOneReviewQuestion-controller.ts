import { GetOneReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/getOneReviewQuestionUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/getOneReviewQuestionController-interface';
import { Response } from 'src/utils/http/response';

export class GetOneReviewQuestionController
  implements GetOneReviewQuestionControllerInterface
{
  private readonly getOneReviewQuestionUseCase: GetOneReviewQuestionUseCaseInterface;

  public constructor(
    getOneReviewQuestionUseCase: GetOneReviewQuestionUseCaseInterface,
  ) {
    this.getOneReviewQuestionUseCase = getOneReviewQuestionUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<ReviewQuestion>> {
    try {
      const reviewId = httpRequest.id;

      if (!reviewId) {
        return Response.badRequest('Missing entity id.');
      }

      const reviewQuestion = await this.getOneReviewQuestionUseCase.execute(
        reviewId,
      );

      return Response.ok(reviewQuestion);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
