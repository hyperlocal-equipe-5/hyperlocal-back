import { GetAllReviewQuestionsUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/getAllReviewQuestionsUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { ReviewQuestionRepositoryInterface } from 'src/infra/abstract/repositories/reviewQuestionRepository-interface';

export class GetAllReviewQuestionsUseCase
  implements GetAllReviewQuestionsUseCaseInterface
{
  private readonly repository: ReviewQuestionRepositoryInterface;

  public constructor(repository: ReviewQuestionRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(): Promise<ReviewQuestion[]> {
    const data = await this.repository.getAll();

    return data;
  }
}
