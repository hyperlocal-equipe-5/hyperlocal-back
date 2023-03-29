import { CreateReviewQuestionUseCase } from 'src/data/usecases/reviewQuestions/createReviewQuestion-usecase';
import { ReviewQuestionEntity } from 'src/entities/reviewQuestion-entity';
import { ReviewQuestionRepository } from 'src/infra/repositories/reviewQuestion-repository';
import { CreateReviewQuestionControllerInterface } from 'src/presentation/abstract/controllers/reviewQuestion/createReviewQuestionController-interface';
import { CreateReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/createReviewQuestion-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateReviewQuestionFactory(): CreateReviewQuestionControllerInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new ReviewQuestionEntity(idGeneratorAdapter);
  const repository = new ReviewQuestionRepository();
  const createReviewQuestionUseCase = new CreateReviewQuestionUseCase(
    entity,
    repository,
  );

  return new CreateReviewQuestionController(createReviewQuestionUseCase);
}
