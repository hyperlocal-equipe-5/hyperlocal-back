import { UpdateReviewQuestionUseCase } from 'src/data/usecases/reviewQuestions/updateReviewQuestion-usecase';
import { ReviewQuestionEntity } from 'src/entities/reviewQuestion-entity';
import { ReviewQuestionRepository } from 'src/infra/repositories/reviewQuestion-repository';
import { UpdateReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/updateReviewQuestionController-interface';
import { UpdateReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/updateReviewQuestion-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateReviewQuestionFactory(): UpdateReviewQuestionControllerInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new ReviewQuestionEntity(idGeneratorAdapter);
  const repository = new ReviewQuestionRepository();
  const updateReviewQuestionUseCase = new UpdateReviewQuestionUseCase(
    entity,
    repository,
  );

  return new UpdateReviewQuestionController(updateReviewQuestionUseCase);
}
