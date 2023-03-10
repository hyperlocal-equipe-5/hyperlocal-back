import { Review } from 'src/domain/entities/review';

export interface GetAllReviewsUseCaseInterface {
  execute(restaurantId: string): Promise<Review[]>;
}
