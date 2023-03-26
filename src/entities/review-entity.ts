import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { UpdateReviewDto } from 'src/domain/dto/review/updateReview-dto';
import { Review } from 'src/domain/entities/review';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { ReviewEntityInterface } from './abstract/interfaces/reviewEntity-interface';
import { ReviewType } from '../domain/types/review-type';
import { Entity } from './entity';

export class ReviewEntity extends Entity implements ReviewEntityInterface {
  private reviewDto: CreateReviewDto | UpdateReviewDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(reviewDto: CreateReviewDto | UpdateReviewDto): void {
    this.reviewDto = reviewDto;
  }

  public validate(): void {
    if (!this.reviewDto.responses) {
      throw new MissingParamError('responses');
    }

    if (!this.reviewDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): ReviewType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      responses: this.reviewDto.responses,
      user: this.reviewDto.user ?? '',
      restaurant: this.reviewDto.restaurant,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainReview: Review): ReviewType {
    return {
      id: mainReview.id,
      responses:
        this.reviewDto.responses ??
        mainReview.responses.map((response) => ({
          question: response.question.id,
          answer: response.answer,
          stars: response.stars,
        })),
      user: this.reviewDto.user ?? mainReview.user ? mainReview.user.id : '',
      restaurant: mainReview.restaurant.id,
      createdAt: mainReview.createdAt,
      updatedAt: this.getDate(),
    };
  }
}
