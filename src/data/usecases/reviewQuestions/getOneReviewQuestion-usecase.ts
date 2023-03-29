import { GetOneReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/getOneReviewQuestionUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { ReviewQuestionRepositoryInterface } from 'src/infra/abstract/repositories/reviewQuestionRepository-interface';

export class GetOneReviewQuestionUseCase
  implements GetOneReviewQuestionUseCaseInterface
{
  private readonly repository: ReviewQuestionRepositoryInterface;

  public constructor(repository: ReviewQuestionRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(reviewQuestionId: string): Promise<ReviewQuestion> {
    const data = await this.repository.getOne(reviewQuestionId);

    return data;
  }
}
