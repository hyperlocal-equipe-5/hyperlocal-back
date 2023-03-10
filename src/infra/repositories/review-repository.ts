import { Review } from 'src/domain/entities/review';
import { ReviewType } from 'src/domain/types/review-type';
import { ReviewRepositoryInterface } from '../abstract/repositories/reviewRepository-interface';

export class ReviewRepository implements ReviewRepositoryInterface {
  public create(reviewBody: ReviewType): Promise<Review> {
    throw new Error('Method not implemented.');
  }
  public delete(reviewId: string, restaurantId: string): Promise<Review> {
    throw new Error('Method not implemented.');
  }
  public getOne(reviewId: string, restaurantId: string): Promise<Review> {
    throw new Error('Method not implemented.');
  }
  public getAll(reviewId: string): Promise<Review[]> {
    throw new Error('Method not implemented.');
  }
  public update(reviewBody: ReviewType): Promise<Review> {
    throw new Error('Method not implemented.');
  }
}
