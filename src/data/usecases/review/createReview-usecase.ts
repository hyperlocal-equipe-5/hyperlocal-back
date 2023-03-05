import { CreateReviewUseCaseInterface } from 'src/data/abstract/usecases/review/createReviewUseCase-interface';
import { CreateReviewDto } from 'src/domain/dto/review/createReview-dto';
import { Review } from 'src/domain/entities/review';

export class CreateReviewUseCase implements CreateReviewUseCaseInterface {
  public execute(createReviewDto: CreateReviewDto): Promise<Review> {
    throw new Error('Method not implemented.');
  }
}
