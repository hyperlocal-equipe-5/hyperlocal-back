import { GetAllReviewQuestionsUseCase } from 'src/data/usecases/reviewQuestions/getAllReviewQuestions-usecase';
import { ReviewQuestionRepository } from 'src/infra/repositories/reviewQuestion-repository';
import { GetAllReviewQuestionsControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/getAllReviewQuestionsController-interface';
import { GetAllReviewQuestionsController } from 'src/presentation/controllers/reviewQuestion/getAllReviewQuestions-controller';

export function makeGetAllReviewQuestionsFactory(): GetAllReviewQuestionsControllerInterface {
  const repository = new ReviewQuestionRepository();
  const getAllReviewQuestionsUseCase = new GetAllReviewQuestionsUseCase(
    repository,
  );

  return new GetAllReviewQuestionsController(getAllReviewQuestionsUseCase);
}
