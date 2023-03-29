import { DeleteReviewQuestionUseCase } from 'src/data/usecases/reviewQuestions/deleteReviewQuestion-usecase';
import { ReviewQuestionRepository } from 'src/infra/repositories/reviewQuestion-repository';
import { DeleteReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/deleteReviewQuestionController-interface';
import { DeleteReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/deleteReviewQuestion-controller';

export function makeDeleteReviewQuestionFactory(): DeleteReviewQuestionControllerInterface {
  const repository = new ReviewQuestionRepository();
  const deleteReviewQuestionUseCase = new DeleteReviewQuestionUseCase(
    repository,
  );

  return new DeleteReviewQuestionController(deleteReviewQuestionUseCase);
}
