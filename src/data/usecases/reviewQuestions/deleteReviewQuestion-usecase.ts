import { DeleteReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/deleteReviewQuestionUseCase-interface';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { ReviewQuestionRepositoryInterface } from 'src/infra/abstract/repositories/reviewQuestionRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteReviewQuestionUseCase
  implements DeleteReviewQuestionUseCaseInterface
{
  private readonly repository: ReviewQuestionRepositoryInterface;

  public constructor(repository: ReviewQuestionRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(reviewQuestionId: string): Promise<ReviewQuestion> {
    const fountEntity = await this.repository.getOne(reviewQuestionId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(reviewQuestionId);

    return deleted;
  }
}
