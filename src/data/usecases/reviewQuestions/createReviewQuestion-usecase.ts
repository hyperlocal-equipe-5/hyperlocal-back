import { CreateReviewQuestionUseCaseInterface } from 'src/data/abstract/usecases/reviewQuestion/createReviewQuestionUseCase-interface';
import { CreateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/createReviewQuestion-dto';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { ReviewQuestionEntityInterface } from 'src/entities/abstract/interfaces/reviewQuestionEntity-interface';
import { ReviewQuestionRepositoryInterface } from 'src/infra/abstract/repositories/reviewQuestionRepository-interface';

export class CreateReviewQuestionUseCase
  implements CreateReviewQuestionUseCaseInterface
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
    createReviewQuestionDto: CreateReviewQuestionDto,
  ): Promise<ReviewQuestion> {
    this.entity.setData(createReviewQuestionDto);
    this.entity.validate();

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
