import { CreateReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/createReviewQuestionUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { CreateReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/createReviewQuestionController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class CreateReviewQuestionController
  implements CreateReviewQuestionControllerInterface
{
  private readonly createReviewQuestionUseCase: CreateReviewQuestionUseCaseInterface;

  public constructor(
    createReviewQuestionUseCase: CreateReviewQuestionUseCaseInterface,
  ) {
    this.createReviewQuestionUseCase = createReviewQuestionUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<ReviewQuestion>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (
        !UserPermissionValidator.validate(loggedUser, 'createReviewQuestions')
      ) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const createReviewQuestionDto = httpRequest.body;
      const createdReviewQuestion =
        await this.createReviewQuestionUseCase.execute(createReviewQuestionDto);

      return Response.created(createdReviewQuestion);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
