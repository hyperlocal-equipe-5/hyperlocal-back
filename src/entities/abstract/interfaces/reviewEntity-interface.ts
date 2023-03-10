import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { UpdateReviewDto } from 'src/domain/dto/review/updateReview-dto';
import { Review } from 'src/domain/entities/review';
import { ReviewType } from '../../../domain/types/review-type';

export interface ReviewEntityInterface {
  setData(reviewDto: CreateReviewDto | UpdateReviewDto): void;
  validate(): void;
  getBody(): ReviewType;
  updateBody(mainReview: Review): ReviewType;
}
