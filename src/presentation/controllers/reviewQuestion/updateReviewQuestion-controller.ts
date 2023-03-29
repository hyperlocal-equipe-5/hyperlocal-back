import { UpdateReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/updateReviewQuestionUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/updateReviewQuestionController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateReviewQuestionController
  implements UpdateReviewQuestionControllerInterface
{
  private readonly updateReviewQuestionUseCase: UpdateReviewQuestionUseCaseInterface;

  public constructor(
    updateReviewQuestionUseCase: UpdateReviewQuestionUseCaseInterface,
  ) {
    this.updateReviewQuestionUseCase = updateReviewQuestionUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<ReviewQuestion>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (
        !UserPermissionValidator.validate(loggedUser, 'updateReviewQuestions')
      ) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const updateReviewQuestionDto = httpRequest.body;
      const updatedReviewQuestion =
        await this.updateReviewQuestionUseCase.execute(updateReviewQuestionDto);

      return Response.ok(updatedReviewQuestion);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
