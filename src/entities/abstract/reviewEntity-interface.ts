import { Review } from 'src/domain/entities/review';

export interface ReviewEntityInterface {
  validate(): void;
  getBody(): Review;
  updateBody(): Review;
}
