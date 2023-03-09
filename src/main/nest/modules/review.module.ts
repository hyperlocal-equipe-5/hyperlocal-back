import { Module } from '@nestjs/common';
import { makeCreateReviewFactory } from 'src/main/factories/review/createReview-factory';
import { makeDeleteReviewFactory } from 'src/main/factories/review/deleteReview-factory';
import { makeGetAllReviewFactory } from 'src/main/factories/review/getAllReviews-factory';
import { makeGetOneReviewFactory } from 'src/main/factories/review/getOneReview-factory';
import { CreateReviewController } from 'src/presentation/controllers/review/createReview-controller';
import { DeleteReviewController } from 'src/presentation/controllers/review/deleteReview-controller';
import { GetAllReviewsController } from 'src/presentation/controllers/review/getAllReviews-controller';
import { GetOneReviewController } from 'src/presentation/controllers/review/getOneReview-controller';
import { ReviewController } from '../controllers/review.controller';
import { ReviewControllerAdmin } from '../controllers/review.controller.admin';

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
export class ReviewModule {}
