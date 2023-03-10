import { GetOneReviewUseCase } from 'src/data/usecases/review/getOneReview-usecase';
import { ReviewRepository } from 'src/infra/repositories/review-repository';
import { GetOneReviewInterface } from 'src/presentation/abstract/controllers/review/getOneReviewController-interface';
import { GetOneReviewController } from 'src/presentation/controllers/review/getOneReview-controller';

export function makeGetOneReviewFactory(): GetOneReviewInterface {
  const repository = new ReviewRepository();
  const getOneReviewUseCase = new GetOneReviewUseCase(repository);

  return new GetOneReviewController(getOneReviewUseCase);
}
