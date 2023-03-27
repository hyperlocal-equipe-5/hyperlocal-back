import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllReviewQuestionsController } from 'src/presentation/controllers/reviewQuestion/getAllReviewQuestions-controller';
import { GetOneReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/getOneReviewQuestion-controller';

@ApiTags('/review-question')
@Controller('/review-question')
export class ReviewQuestionController {
  constructor(
    private readonly getOneReviewQuestionController: GetOneReviewQuestionController,
    private readonly getAllReviewQuestionsController: GetAllReviewQuestionsController,
  ) {}

  @ApiOperation({
    summary: 'Route to get the review questions.',
  })
  @Get()
  async getAll() {
    const httpRequest: HttpRequest = {};
    return await this.getAllReviewQuestionsController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route to get one review question.',
  })
  @Get(':id')
  async getOne(@Param('id') id: string) {
    const httpRequest: HttpRequest = { id };
    return await this.getOneReviewQuestionController.execute(httpRequest);
  }
}
