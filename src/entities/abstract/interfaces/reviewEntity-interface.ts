import { Review } from 'src/domain/entities/review';
import { ReviewType } from '../types/review-type';

export interface ReviewEntityInterface {
  validate(): void;
  getBody(): ReviewType;
  updateBody(mainReview: Review): ReviewType;
}
