import { UpdateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/updateReviewQuestion-dto';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface UpdateReviewQuestionUseCaseInterface {
  execute(
    updateReviewQuestionDto: UpdateReviewQuestionDto,
  ): Promise<ReviewQuestion>;
}
