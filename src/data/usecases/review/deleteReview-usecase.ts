import { DeleteReviewUseCaseInterface } from 'src/data/abstract/usecases/review/deleteReviewUseCase-interface';
import { Review } from 'src/domain/entities/review';
import { ReviewRepositoryInterface } from 'src/infra/abstract/repositories/reviewRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteReviewUseCase implements DeleteReviewUseCaseInterface {
  private readonly repository: ReviewRepositoryInterface;

  public constructor(repository: ReviewRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(
    reviewId: string,
    restaurantId: string,
  ): Promise<Review> {
    const fountEntity = await this.repository.getOne(reviewId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(reviewId, restaurantId);

    return deleted;
  }
}
