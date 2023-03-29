import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface GetOneReviewQuestionUseCaseInterface {
  execute(reviewQuestionId: string): Promise<ReviewQuestion>;
}
