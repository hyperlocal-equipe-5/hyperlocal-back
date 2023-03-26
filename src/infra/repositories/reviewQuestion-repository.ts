import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { ReviewQuestionRepositoryInterface } from '../abstract/repositories/reviewQuestionRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class ReviewQuestionRepository
  implements ReviewQuestionRepositoryInterface
{
  public async create(
    reviewQuestionBody: ReviewQuestion,
  ): Promise<ReviewQuestion> {
    return await prismaDatabase.reviewQuestion.create({
      data: reviewQuestionBody,
    });
  }

  public async delete(reviewQuestionId: string): Promise<ReviewQuestion> {
    return await prismaDatabase.reviewQuestion.delete({
      where: { id: reviewQuestionId },
    });
  }

  public async getOne(reviewQuestionId: string): Promise<ReviewQuestion> {
    return await prismaDatabase.reviewQuestion.findUnique({
      where: { id: reviewQuestionId },
    });
  }

  public async getAll(): Promise<ReviewQuestion[]> {
    return await prismaDatabase.reviewQuestion.findMany();
  }

  public async update(
    reviewQuestionId: string,
    reviewQuestionBody: ReviewQuestion,
  ): Promise<ReviewQuestion> {
    return await prismaDatabase.reviewQuestion.update({
      where: { id: reviewQuestionId },
      data: reviewQuestionBody,
    });
  }
}
