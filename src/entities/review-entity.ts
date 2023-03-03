import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { UpdateReviewDto } from 'src/domain/dto/review/updateReview-dto';
import { Review } from 'src/domain/entities/review';
import { ReviewEntityInterface } from './abstract/reviewEntity-interface';

export class ReviewEntity implements ReviewEntityInterface {
  constructor(private readonly reviewDto: CreateReviewDto | UpdateReviewDto) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Review {
    throw new Error('Method not implemented.');
  }

  updateBody(mainReview: Review): Review {
    throw new Error('Method not implemented.');
  }
}
