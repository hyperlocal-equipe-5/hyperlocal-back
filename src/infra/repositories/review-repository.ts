import { Review } from 'src/domain/entities/review';
import { ReviewType } from 'src/domain/types/review-type';
import { ReviewRepositoryInterface } from '../abstract/repositories/reviewRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class ReviewRepository implements ReviewRepositoryInterface {
  public async create(reviewBody: ReviewType): Promise<Review> {
    return await prismaDatabase.review
      .create({
        data: {
          ...reviewBody,
          restaurant: { connect: { id: reviewBody.restaurant } },
          user: { connect: { id: reviewBody.user } },
        },
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
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
    return prismaDatabase.review
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
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(reviewId: string, restaurantId: string): Promise<Review> {
    return prismaDatabase.review
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
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<Review[]> {
    return prismaDatabase.review
      .findMany({
        where: { id: restaurantId },
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
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
    return await prismaDatabase.review
      .update({
        where: { id: reviewBody.id },
        data: {
          ...reviewBody,
          restaurant: { connect: { id: reviewBody.restaurant } },
          user: { connect: { id: reviewBody.user } },
        },
        include: {
          restaurant: true,
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
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
