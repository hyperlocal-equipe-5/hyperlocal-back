import { Category } from 'src/domain/entities/category';
import { CategoryType } from 'src/domain/types/category-type';
import { CategoryRepositoryInterface } from '../abstract/repositories/categoryRepositor-interface';
import { prismaDatabase } from '../database/prisma-database';

export class CategoryRepository implements CategoryRepositoryInterface {
  public async create(categoryBody: CategoryType): Promise<Category | any> {
    return await prismaDatabase.category
      .create({
        data: {
          ...categoryBody,
          restaurant: { connect: { id: categoryBody.restaurant } },
          products: {
            connect: categoryBody.products.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          restaurant: true,
          products: { include: { ingredients: true } },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(
    categoryId: string,
    restaurantId: string,
  ): Promise<Category | any> {
    return await prismaDatabase.category
      .delete({
        where: { id: categoryId },
        include: {
          restaurant: true,
          products: { include: { ingredients: true } },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(
    categoryId: string,
    restaurantId: string,
  ): Promise<Category | any> {
    return await prismaDatabase.category
      .findUnique({
        where: { id: categoryId },
        include: {
          restaurant: true,
          products: { include: { ingredients: true } },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<Category[] | any> {
    return await prismaDatabase.category
      .findMany({
        where: { restaurantId: restaurantId },
        include: {
          restaurant: true,
          products: { include: { ingredients: true } },
        },
      })
      .then((data) => {
        console.log(data);
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(categoryBody: CategoryType): Promise<Category | any> {
    return await prismaDatabase.category
      .update({
        where: { id: categoryBody.id },
        data: {
          ...categoryBody,
          restaurant: { connect: { id: categoryBody.restaurant } },
          products: {
            connect: categoryBody.products.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          restaurant: true,
          products: { include: { ingredients: true } },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
