import { GetAllReviewsUseCaseInterface } from 'src/data/abstract/usecases/review/getAllReviewsUseCase-interface';
import { Review } from 'src/domain/entities/review';

export class GetAllReviewsUseCase implements GetAllReviewsUseCaseInterface {
  public execute(restaurantId: string): Promise<Review[]> {
    throw new Error('Method not implemented.');
  }
}
