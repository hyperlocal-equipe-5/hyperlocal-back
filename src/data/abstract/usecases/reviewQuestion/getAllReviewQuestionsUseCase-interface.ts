import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface GetAllReviewQuestionsUseCaseInterface {
  execute(): Promise<ReviewQuestion[]>;
}
