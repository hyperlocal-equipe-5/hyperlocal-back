import { DeleteReviewUseCaseInterface } from 'src/data/abstract/usecases/review/deleteReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';

export class DeleteReviewUseCase implements DeleteReviewUseCaseInterface {
  public execute(reviewId: string, restaurantId: string): Promise<Review> {
    throw new Error('Method not implemented.');
  }
}
