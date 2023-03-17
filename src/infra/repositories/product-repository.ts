import { Product } from 'src/domain/entities/product';
import { ProductType } from 'src/domain/types/product-type';
import { ProductRepositoryInterface } from '../abstract/repositories/productRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class ProductRepository implements ProductRepositoryInterface {
  public async create(productBody: ProductType): Promise<Product | any> {
    return prismaDatabase.product
      .create({
        data: {
          ...productBody,
          restaurant: { connect: { id: productBody.restaurant } },
          category: { connect: { id: productBody.category } },
          ingredients: {
            connect: productBody.ingredients.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          category: true,
          ingredients: true,
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(
    productId: string,
    restaurantId: string,
  ): Promise<Product | any> {
    return prismaDatabase.product
      .delete({
        where: { id: productId },
        include: {
          category: true,
          ingredients: true,
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(
    productId: string,
    restaurantId: string,
  ): Promise<Product | any> {
    return prismaDatabase.product
      .findUnique({
        where: { id: productId },
        include: {
          category: true,
          ingredients: true,
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<Product[] | any[]> {
    return prismaDatabase.product
      .findMany({
        where: { restaurantId: restaurantId },
        include: {
          category: true,
          ingredients: true,
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(productBody: ProductType): Promise<Product | any> {
    return prismaDatabase.product
      .update({
        where: { id: productBody.id },
        data: {
          ...productBody,
          restaurant: { connect: { id: productBody.restaurant } },
          category: { connect: { id: productBody.category } },
          ingredients: {
            connect: productBody.ingredients.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          category: true,
          ingredients: true,
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
