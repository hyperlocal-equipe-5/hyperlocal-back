import { Controller, Post, Body } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateReviewController } from 'src/presentation/controllers/review/createReview-controller';

@Controller('/reviews')
export class ReviewController {
  constructor(
    private readonly createReviewController: CreateReviewController,
  ) {}

  @Post('/review')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createReviewController.execute(httpRequest);
  }
}
