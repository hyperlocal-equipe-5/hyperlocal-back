import { Controller, Patch, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/createReviewQuestion-controller';
import { DeleteReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/deleteReviewQuestion-controller';
import { UpdateReviewQuestionController } from 'src/presentation/controllers/reviewQuestion/updateReviewQuestion-controller';
import { CreateReviewQuestion } from '../../dtos/reviewQuestion/createReviewQuestion-dto';
import { UpdateReviewQuestion } from '../../dtos/reviewQuestion/updateReviewQuestion-dto';

@ApiTags('/admin/review-question')
@Controller('/admin/review-question')
export class ReviewQuestionControllerAdmin {
  constructor(
    private readonly createReviewQuestionController: CreateReviewQuestionController,
    private readonly deleteReviewQuestionController: DeleteReviewQuestionController,
    private readonly updateReviewQuestionController: UpdateReviewQuestionController,
  ) {}

  @ApiOperation({
    summary: 'Route to create a review question.',
  })
  @Post()
  @ApiBearerAuth()
  async create(@Body() body: CreateReviewQuestion) {
    const httpRequest: HttpRequest = { body };

    return await this.createReviewQuestionController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route to delete a review question.',
  })
  @ApiBearerAuth()
  @Delete()
  async delete(@Param('id') id: string) {
    const httpRequest: HttpRequest = { id };

    return await this.deleteReviewQuestionController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route to update a review question.',
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateReviewQuestion) {
    const httpRequest: HttpRequest = { body: { ...body, id } };

    return await this.updateReviewQuestionController.execute(httpRequest);
  }
}
