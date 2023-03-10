import { CreateReviewUseCase } from 'src/data/usecases/review/createReview-usecase';
import { ReviewEntity } from 'src/entities/review-entity';
import { ReviewRepository } from 'src/infra/repositories/review-repository';
import { CreateReviewInterface } from 'src/presentation/abstract/controllers/review/createReviewController-interface';
import { CreateReviewController } from 'src/presentation/controllers/review/createReview-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateReviewFactory(): CreateReviewInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new ReviewEntity(idGeneratorAdapter);
  const repository = new ReviewRepository();
  const createReviewUseCase = new CreateReviewUseCase(entity, repository);

  return new CreateReviewController(createReviewUseCase);
}
