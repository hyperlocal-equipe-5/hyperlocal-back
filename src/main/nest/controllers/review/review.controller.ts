import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateReviewController } from 'src/presentation/controllers/review/createReview-controller';
import { CreateReview } from '../../dtos/Review/createReview-dto';

@ApiTags('/reviews')
@Controller('/reviews')
export class ReviewController {
  constructor(
    private readonly createReviewController: CreateReviewController,
  ) {}

  @ApiOperation({
    summary: 'Route to create a new review.',
  })
  @Post()
  async create(@Body() body: CreateReview) {
    const httpRequest: HttpRequest = { body };
    return await this.createReviewController.execute(httpRequest);
  }
}
