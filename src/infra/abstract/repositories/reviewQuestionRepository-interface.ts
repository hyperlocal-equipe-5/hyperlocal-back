import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';

export interface ReviewQuestionRepositoryInterface {
  create(reviewQuestionBody: ReviewQuestion): Promise<ReviewQuestion>;
  delete(reviewQuestionId: string): Promise<ReviewQuestion>;
  getOne(reviewQuestionId: string): Promise<ReviewQuestion>;
  getAll(): Promise<ReviewQuestion[]>;
  update(reviewQuestionBody: ReviewQuestion): Promise<ReviewQuestion>;
}
