import { Controller, Query, Get } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllReviewsController } from 'src/presentation/controllers/review/getAllReviews-controller';
import { GetOneReviewController } from 'src/presentation/controllers/review/getOneReview-controller';

@Controller('/admin/review')
export class ReviewControllerAdmin {
  constructor(
    private readonly getAllReviewsController: GetAllReviewsController,
    private readonly getOneReviewController: GetOneReviewController,
  ) {}

  @Get('/get-one-review')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneReviewController.execute(httpRequest);
  }

  @Get('/get-all-reviews')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllReviewsController.execute(httpRequest);
  }
}
