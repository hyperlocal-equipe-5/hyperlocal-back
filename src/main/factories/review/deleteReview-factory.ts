import { DeleteReviewUseCase } from 'src/data/usecases/review/deleteReview-usecase';
import { ReviewRepository } from 'src/infra/repositories/review-repository';
import { DeleteReviewInterface } from 'src/presentation/abstract/controllers/review/deleteReviewController-interface';
import { DeleteReviewController } from 'src/presentation/controllers/review/deleteReview-controller';

export function makeDeleteReviewFactory(): DeleteReviewInterface {
  const repository = new ReviewRepository();
  const deleteReviewUseCase = new DeleteReviewUseCase(repository);

  return new DeleteReviewController(deleteReviewUseCase);
}
