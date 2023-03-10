import { GetOneReviewUseCaseInterface } from 'src/data/abstract/usecases/review/getOneReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { ReviewRepositoryInterface } from 'src/infra/abstract/repositories/reviewRepository-interface';

export class GetOneReviewUseCase implements GetOneReviewUseCaseInterface {
  private readonly repository: ReviewRepositoryInterface;

  public constructor(repository: ReviewRepositoryInterface) {
    this.repository = repository;
  }

  public execute(reviewId: string, restaurantId: string): Promise<Review> {
    const data = this.repository.getOne(reviewId, restaurantId);

    return data;
  }
}
