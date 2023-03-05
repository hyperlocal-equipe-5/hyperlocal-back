import { GetOneReviewUseCaseInterface } from 'src/data/abstract/usecases/review/getOneReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';

export class GetOneReviewUseCase implements GetOneReviewUseCaseInterface {
  public execute(reviewId: string, restaurantId: string): Promise<Review> {
    throw new Error('Method not implemented.');
  }
}
