import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { Review } from 'src/domain/entities/review';

export interface CreateReviewUseCaseInterface {
  execute(createReviewDto: CreateReviewDto): Promise<Review>;
}
