import { UpdateReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/updateReviewQuestionUseCase-interface';
import { UpdateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/updateReviewQuestion-dto';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { ReviewQuestionEntityInterface } from 'src/entities/abstract/interfaces/reviewQuestionEntity-interface';
import { ReviewQuestionRepositoryInterface } from 'src/infra/abstract/repositories/reviewQuestionRepository-interface';

export class UpdateReviewQuestionUseCase
  implements UpdateReviewQuestionUseCaseInterface
{
  private readonly entity: ReviewQuestionEntityInterface;
  private readonly repository: ReviewQuestionRepositoryInterface;

  public constructor(
    entity: ReviewQuestionEntityInterface,
    repository: ReviewQuestionRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(
    updateReviewQuestionDto: UpdateReviewQuestionDto,
  ): Promise<ReviewQuestion> {
    this.entity.setData(updateReviewQuestionDto);
    this.entity.validate();

    const body = this.entity.getBody();
    const response = await this.repository.update(body);

    return response;
  }
}
