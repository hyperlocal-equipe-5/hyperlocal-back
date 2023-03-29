import { GetOneReviewQuestionUseCase } from 'src/data/usecases/reviewQuestions/getOneReviewQuestion-usecase';
import { ReviewQuestionRepository } from 'src/infra/repositories/reviewQuestion-repository';
import { GetOneReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/getOneReviewQuestionController-interface';
import { GetOneReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/getOneReviewQuestion-controller';

export function makeGetOneReviewQuestionFactory(): GetOneReviewQuestionControllerInterface {
  const repository = new ReviewQuestionRepository();
  const getOneReviewQuestionUseCase = new GetOneReviewQuestionUseCase(
    repository,
  );

  return new GetOneReviewQuestionController(getOneReviewQuestionUseCase);
}
