import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateReviewController } from 'src/presentation/controllers/review/createReview-controller';

@ApiTags('/reviews')
@Controller('/reviews')
export class ReviewController {
  constructor(
    private readonly createReviewController: CreateReviewController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Post('/review')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createReviewController.execute(httpRequest);
  }
}
