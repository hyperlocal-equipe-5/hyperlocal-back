import { Review } from 'src/domain/entities/review';

export interface DeleteReviewUseCaseInterface {
  execute(reviewId: string, restaurantId: string): Promise<Review>;
}
