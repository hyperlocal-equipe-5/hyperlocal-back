import { CreateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/createReviewQuestion-dto';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface CreateReviewQuestionUseCaseInterface {
  execute(
    createReviewQuestionDto: CreateReviewQuestionDto,
  ): Promise<ReviewQuestion>;
}
