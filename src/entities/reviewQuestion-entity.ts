import { CreateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/createReviewQuestion-dto';
import { UpdateReviewQuestionDto } from 'src/domain/dto/reviewQuestion/updateReviewQuestion-dto';
import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { ReviewQuestionEntityInterface } from './abstract/interfaces/reviewQuestionEntity-interface';
import { Entity } from './entity';

export class ReviewQuestionEntity
  extends Entity
  implements ReviewQuestionEntityInterface
{
  private reviewQuestionDto: CreateReviewQuestionDto | UpdateReviewQuestionDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(
    reviewQuestionDto: CreateReviewQuestionDto | UpdateReviewQuestionDto,
  ): void {
    this.reviewQuestionDto = reviewQuestionDto;
  }

  public validate(): void {
    if (!this.reviewQuestionDto.question) {
      throw new MissingParamError('question');
    }
  }

  public getBody(): ReviewQuestion {
    return {
      id: this.idGeneratorAdapter.generateId(),
      question: this.reviewQuestionDto.question,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainReview: ReviewQuestion): ReviewQuestion {
    return {
      id: mainReview.id,
      question: this.reviewQuestionDto.question ?? mainReview.question,
      createdAt: mainReview.createdAt,
      updatedAt: this.getDate(),
    };
  }
}
