import { GetAllReviewsUseCaseInterface } from 'src/data/abstract/usecases/review/getAllReviewsUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { ReviewRepositoryInterface } from 'src/infra/abstract/repositories/reviewRepository-interface';

export class GetAllReviewsUseCase implements GetAllReviewsUseCaseInterface {
  private readonly repository: ReviewRepositoryInterface;

  public constructor(repository: ReviewRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Review[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
