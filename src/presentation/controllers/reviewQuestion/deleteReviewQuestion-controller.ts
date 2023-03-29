import { DeleteReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/deleteReviewQuestionUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/deleteReviewQuestionController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class DeleteReviewQuestionController
  implements DeleteReviewQuestionControllerInterface
{
  private readonly deleteReviewQuestionUseCase: DeleteReviewQuestionUseCaseInterface;

  public constructor(
    deleteReviewQuestionUseCase: DeleteReviewQuestionUseCaseInterface,
  ) {
    this.deleteReviewQuestionUseCase = deleteReviewQuestionUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<ReviewQuestion>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (
        !UserPermissionValidator.validate(loggedUser, 'deleteReviewQuestions')
      ) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const reviewQuestionId = httpRequest.id;

      if (!reviewQuestionId) {
        return Response.badRequest('Missing entity id.');
      }

      const deletedReviewQuestion =
        await this.deleteReviewQuestionUseCase.execute(reviewQuestionId);

      return Response.ok(deletedReviewQuestion);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
