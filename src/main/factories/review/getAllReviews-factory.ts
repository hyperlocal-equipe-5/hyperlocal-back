import { GetAllReviewsUseCase } from 'src/data/usecases/review/getAllReviews-usecase';
import { ReviewRepository } from 'src/infra/repositories/review-repository';
import { GetAllReviewsInterface } from 'src/presentation/abstract/controllers/review/getAllReviewsController-interface';
import { GetAllReviewsController } from 'src/presentation/controllers/review/getAllReviews-controller';

export function makeGetAllReviewFactory(): GetAllReviewsInterface {
  const repository = new ReviewRepository();
  const getAllreviewsUseCase = new GetAllReviewsUseCase(repository);

  return new GetAllReviewsController(getAllreviewsUseCase);
}
