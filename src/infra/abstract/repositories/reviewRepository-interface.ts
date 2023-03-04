import { Review } from 'src/domain/entities/review';
import { ReviewType } from 'src/domain/types/review-type';

export interface ReviewRepositoryInterface {
  create(reviewBody: ReviewType): Promise<Review>;
  delete(reviewId: string, restaurantId: string): Promise<Review>;
  getOne(reviewId: string, restaurantId: string): Promise<Review>;
  getAll(reviewId: string): Promise<Review[]>;
  update(reviewBody: ReviewType): Promise<Review>;
}
