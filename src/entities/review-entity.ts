import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { UpdateReviewDto } from 'src/domain/dto/review/updateReview-dto';
import { Review } from 'src/domain/entities/review';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { ReviewEntityInterface } from './abstract/interfaces/reviewEntity-interface';
import { ReviewType } from '../domain/types/review-type';
import { Entity } from './entity';

export class ReviewEntity extends Entity implements ReviewEntityInterface {
  private readonly reviewDto: CreateReviewDto | UpdateReviewDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(
    reviewDto: CreateReviewDto | UpdateReviewDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
  ) {
    super();
    this.reviewDto = reviewDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public validate(): void {
    if (!this.reviewDto.stars) {
      throw new MissingParamError('starts');
    }

    if (!this.reviewDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): ReviewType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      stars: this.reviewDto.stars ?? 0,
      comment: this.reviewDto.comment ?? '',
      user: this.reviewDto.user ?? '',
      restaurant: this.reviewDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainReview: Review): ReviewType {
    return {
      id: mainReview.id,
      stars: this.reviewDto.stars ?? mainReview.stars,
      comment: this.reviewDto.comment ?? mainReview.comment,
      user: this.reviewDto.user ?? mainReview.user.id,
      restaurant: this.reviewDto.restaurant,
      createdOn: mainReview.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
