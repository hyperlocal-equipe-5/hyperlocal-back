import { CreateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/createReviewQuestion-dto';
import { UpdateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/updateReviewQuestion-dto';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface ReviewQuestionEntityInterface {
  setData(reviewDto: CreateReviewQuestionDto | UpdateReviewQuestionDto): void;
  validate(): void;
  getBody(): ReviewQuestion;
  updateBody(mainReview: ReviewQuestion): ReviewQuestion;
}
