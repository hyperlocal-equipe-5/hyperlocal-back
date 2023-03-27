import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { makeCreateReviewQuestionFactory } from 'src/main/factories/review-question/createReviewQuestion-factory';
import { makeDeleteReviewQuestionFactory } from 'src/main/factories/review-question/deleteReviewQuestion-factory';
import { makeGetAllReviewQuestionsFactory } from 'src/main/factories/review-question/getAllReviewQuestions-factory';
import { makeGetOneReviewQuestionFactory } from 'src/main/factories/review-question/getOneReviewQuestionFactory';
import { makeUpdateReviewQuestionFactory } from 'src/main/factories/review-question/updateReviewQuestion-factory';
import { CreateReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/createReviewQuestion-controller';
import { DeleteReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/deleteReviewQuestion-controller';
import { GetAllReviewQuestionsController } from 'src/presentation/controllers/reviewQuestion/getAllReviewQuestions-controller';
import { GetOneReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/getOneReviewQuestion-controller';
import { UpdateReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/updateReviewQuestion-controller';
import { ReviewQuestionController } from '../controllers/reviewQuestion/reviewQuestion.controller';
import { LoginMiddleware } from '../middlewares/login.middleware';

@Module({
  controllers: [ReviewQuestionController],
  providers: [
    {
      provide: CreateReviewQuestionController,
      useFactory: makeCreateReviewQuestionFactory,
    },
    {
      provide: DeleteReviewQuestionController,
      useFactory: makeDeleteReviewQuestionFactory,
    },
    {
      provide: UpdateReviewQuestionController,
      useFactory: makeUpdateReviewQuestionFactory,
    },
    {
      provide: GetOneReviewQuestionController,
      useFactory: makeGetOneReviewQuestionFactory,
    },
    {
      provide: GetAllReviewQuestionsController,
      useFactory: makeGetAllReviewQuestionsFactory,
    },
  ],
})
export class ReviewQuestionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
