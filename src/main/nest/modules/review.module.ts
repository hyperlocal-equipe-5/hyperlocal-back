import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateReviewFactory } from 'src/main/factories/review/createReview-factory';
import { makeDeleteReviewFactory } from 'src/main/factories/review/deleteReview-factory';
import { makeGetAllReviewFactory } from 'src/main/factories/review/getAllReviews-factory';
import { makeGetOneReviewFactory } from 'src/main/factories/review/getOneReview-factory';
import { CreateReviewController } from 'src/presentation/controllers/review/createReview-controller';
import { DeleteReviewController } from 'src/presentation/controllers/review/deleteReview-controller';
import { GetAllReviewsController } from 'src/presentation/controllers/review/getAllReviews-controller';
import { GetOneReviewController } from 'src/presentation/controllers/review/getOneReview-controller';
import { ReviewController } from '../controllers/review/review.controller';
import { ReviewControllerAdmin } from '../controllers/review/review.controller.admin';

@Module({
  controllers: [ReviewController, ReviewControllerAdmin],
  providers: [
    {
      provide: CreateReviewController,
      useFactory: makeCreateReviewFactory,
    },
    {
      provide: DeleteReviewController,
      useFactory: makeDeleteReviewFactory,
    },
    {
      provide: GetAllReviewsController,
      useFactory: makeGetAllReviewFactory,
    },
    {
      provide: GetOneReviewController,
      useFactory: makeGetOneReviewFactory,
    },
  ],
})
export class ReviewModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
