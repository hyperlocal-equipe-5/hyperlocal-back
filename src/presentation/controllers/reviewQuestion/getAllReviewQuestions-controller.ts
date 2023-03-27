import { GetAllReviewQuestionsUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/getAllReviewQuestionsUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllReviewQuestionsControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/getAllReviewQuestionsController-interface';
import { Response } from 'src/utils/http/response';

export class GetAllReviewQuestionController
  implements GetAllReviewQuestionsControllerInterface
{
  private readonly getAllReviewQuestionsUseCase: GetAllReviewQuestionsUseCaseInterface;

  public constructor(
    getAllReviewQuestionsUseCase: GetAllReviewQuestionsUseCaseInterface,
  ) {
    this.getAllReviewQuestionsUseCase = getAllReviewQuestionsUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<ReviewQuestion>> {
    try {
      const reviewQuestions = await this.getAllReviewQuestionsUseCase.execute();

      return Response.ok(reviewQuestions);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
