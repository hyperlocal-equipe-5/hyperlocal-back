import { Controller, Query, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { DeleteReviewController } from 'src/presentation/controllers/review/deleteReview-controller';
import { GetAllReviewsController } from 'src/presentation/controllers/review/getAllReviews-controller';
import { GetOneReviewController } from 'src/presentation/controllers/review/getOneReview-controller';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';
import { GetAllReviews } from '../../dtos/Review/getAllReviews-dto';

@ApiTags('/admin/review')
@Controller('/admin/review')
export class ReviewControllerAdmin {
  constructor(
    private readonly getAllReviewsController: GetAllReviewsController,
    private readonly getOneReviewController: GetOneReviewController,
    private readonly deleteReviewController: DeleteReviewController,
  ) {}

  @ApiOperation({
    summary:
      'Route that an authorized account can get one review from a restaurant.',
  })
  @ApiBearerAuth()
  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneReviewController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can get all reviews from a restaurants.',
  })
  @ApiBearerAuth()
  @Get()
  async getAll(@Query() query: GetAllReviews, @Body() body: any) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant, body };
    return await this.getAllReviewsController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can delete a review from a restaurant.',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @Query() query: GetOneRestaurant,
    @Body() body: any,
  ) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant, body };
    return await this.deleteReviewController.execute(httpRequest);
  }
}
