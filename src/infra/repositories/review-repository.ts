import { Review } from 'src/domain/entities/review';
import { ReviewType } from 'src/domain/types/review-type';
import { ReviewRepositoryInterface } from '../abstract/repositories/reviewRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class ReviewRepository implements ReviewRepositoryInterface {
  public async create(reviewBody: ReviewType): Promise<Review> {
    const createdAnswers = await Promise.all(
      await reviewBody.responses.map(
        async (response) =>
          await prismaDatabase.reviewAnswer.create({
            data: {
              id: response.id,
              question: { connect: { id: response.question } },
              answer: response.answer,
              stars: response.stars,
            },
          }),
      ),
    );

    const data: any = {
      ...reviewBody,
      restaurant: { connect: { id: reviewBody.restaurant } },
      responses: {
        connect: createdAnswers.map((answer) => {
          return { id: answer.id };
        }),
      },
    };

    if (reviewBody.user && reviewBody.user !== '') {
      data.user = { connect: { id: reviewBody.user } };
    } else {
      delete data.user;
    }

    return await prismaDatabase.review
      .create({
        data,
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
          responses: {
            include: {
              question: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(reviewId: string, restaurantId: string): Promise<Review> {
    return await prismaDatabase.review
      .delete({
        where: { id: reviewId },
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
          responses: {
            include: {
              question: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(reviewId: string, restaurantId: string): Promise<Review> {
    return await prismaDatabase.review
      .findUnique({
        where: { id: reviewId },
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
          responses: {
            include: {
              question: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<Review[]> {
    return await prismaDatabase.review
      .findMany({
        where: { restaurantId: restaurantId },
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
          responses: {
            include: {
              question: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(reviewBody: ReviewType): Promise<Review> {
    const createdAnswers = await Promise.all(
      await reviewBody.responses.map(
        async (response) =>
          await prismaDatabase.reviewAnswer.update({
            where: { id: response.id },
            data: {
              id: reviewBody.id,
              question: { connect: { id: response.question } },
              answer: response.answer,
              stars: response.stars,
            },
          }),
      ),
    );

    const data: any = {
      ...reviewBody,
      restaurant: { connect: { id: reviewBody.restaurant } },
      responses: {
        connect: createdAnswers.map((answer) => {
          return { id: answer.id };
        }),
      },
    };

    if (reviewBody.user && reviewBody.user !== '') {
      data.user = { connect: { id: reviewBody.user } };
    } else {
      delete data.user;
    }

    return await prismaDatabase.review
      .update({
        where: { id: reviewBody.id },
        data,
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
          responses: {
            include: {
              question: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
