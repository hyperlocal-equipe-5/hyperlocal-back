import { CreateReviewUseCaseInterface } from 'src/data/abstract/usecases/review/createReviewUseCase-interface';
import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { Review } from 'src/domain/entities/review';
import { ReviewEntityInterface } from 'src/entities/abstract/interfaces/reviewEntity-interface';
import { ReviewRepositoryInterface } from 'src/infra/abstract/repositories/reviewRepository-interface';

export class CreateReviewUseCase implements CreateReviewUseCaseInterface {
  private readonly entity: ReviewEntityInterface;
  private readonly repository: ReviewRepositoryInterface;

  public async execute(createReviewDto: CreateReviewDto): Promise<Review> {
    this.entity.setData(createReviewDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
