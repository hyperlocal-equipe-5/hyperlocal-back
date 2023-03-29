import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface DeleteReviewQuestionUseCaseInterface {
  execute(reviewQuestionId: string): Promise<ReviewQuestion>;
}
