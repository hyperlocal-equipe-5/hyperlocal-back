import { CreateReviewUseCaseInterface } from 'src/data/abstract/usecases/review/createReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateReviewInterface } from 'src/presentation/abstract/controllers/review/createReviewController-interface';
import { Response } from 'src/utils/http/response';

export class CreateReviewController implements CreateReviewInterface {
  private readonly createReviewUseCase: CreateReviewUseCaseInterface;
  public constructor(createReviewUseCase: CreateReviewUseCaseInterface) {
    this.createReviewUseCase = createReviewUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Review>> {
    try {
      const createReviewDto = httpRequest.body;
      const createdReview = await this.createReviewUseCase.execute(
        createReviewDto,
      );

      return Response.created(createdReview);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
