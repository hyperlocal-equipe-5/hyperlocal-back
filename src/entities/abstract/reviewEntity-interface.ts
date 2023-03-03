import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { UpdateReviewDto } from 'src/domain/dto/review/updateReview-dto';
import { Review } from 'src/domain/entities/review';

export interface ReviewEntityInterface {
  constructor(reviewDto: CreateReviewDto | UpdateReviewDto): void;
  validate(): void;
  getBody(): Review;
  updateBody(mainReview: Review): Review;
}
