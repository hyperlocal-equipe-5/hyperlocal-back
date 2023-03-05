import { DeleteReviewUseCaseInterface } from 'src/data/abstract/usecases/review/deleteReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { ReviewRepositoryInterface } from 'src/infra/abstract/repositories/reviewRepository-interface';

export class DeleteReviewUseCase implements DeleteReviewUseCaseInterface {
  private readonly repository: ReviewRepositoryInterface;

  public constructor(repository: ReviewRepositoryInterface) {
    this.repository = repository;
  }

  public execute(reviewId: string, restaurantId: string): Promise<Review> {
    const deleted = this.repository.delete(reviewId, restaurantId);

    return deleted;
  }
}
