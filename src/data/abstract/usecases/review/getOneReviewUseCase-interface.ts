import { Review } from 'src/domain/entities/review';

export interface GetOneReviewUseCaseInterface {
  execute(reviewId: string, restaurantId: string): Promise<Review>;
}
