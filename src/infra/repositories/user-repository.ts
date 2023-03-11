import { User } from 'src/domain/entities/user';
import { UserType } from 'src/domain/types/user-type';
import { UserRepositoryInterface } from '../abstract/repositories/userRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class UserRepository implements UserRepositoryInterface {
  public async create(userBody: UserType): Promise<User> {
    return await prismaDatabase.user
      .create({
        data: {
          ...userBody,
          restaurant: { connect: { id: userBody.restaurant } },
          role: { connect: { id: userBody.role } },
        },
        include: {
          role: { include: { restaurant: true, access: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(userId: string, restaurantId: string): Promise<User> {
    return await prismaDatabase.user
      .delete({
        where: { id: userId },
        include: {
          role: { include: { restaurant: true, access: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOneById(userId: string, restaurantId: string): Promise<User> {
    return await prismaDatabase.user
      .findUnique({
        where: { id: userId },
        include: {
          role: { include: { restaurant: true, access: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOneByEmail(userEmail: string): Promise<User> {
    return await prismaDatabase.user
      .findUnique({
        where: { email: userEmail },
        include: {
          role: { include: { restaurant: true, access: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<User[]> {
    return await prismaDatabase.user
      .findMany({
        where: { restaurantId: restaurantId },
        include: {
          role: { include: { restaurant: true, access: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(userBody: UserType): Promise<User> {
    return await prismaDatabase.user
      .update({
        where: { id: userBody.id },
        data: {
          ...userBody,
          restaurant: { connect: { id: userBody.restaurant } },
          role: { connect: { id: userBody.role } },
        },
        include: {
          role: { include: { restaurant: true, access: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
