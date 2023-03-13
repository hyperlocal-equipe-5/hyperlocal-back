import { Controller, Query, Get, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { DeleteReviewController } from 'src/presentation/controllers/review/deleteReview-controller';
import { GetAllReviewsController } from 'src/presentation/controllers/review/getAllReviews-controller';
import { GetOneReviewController } from 'src/presentation/controllers/review/getOneReview-controller';

@ApiTags('/admin/review')
@Controller('/admin/review')
export class ReviewControllerAdmin {
  constructor(
    private readonly getAllReviewsController: GetAllReviewsController,
    private readonly getOneReviewController: GetOneReviewController,
    private readonly deleteReviewController: DeleteReviewController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-review')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneReviewController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-reviews')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllReviewsController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-review')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteReviewController.execute(httpRequest);
  }
}
