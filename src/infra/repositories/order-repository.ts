import { Order } from 'src/domain/entities/order';
import { OrderType } from 'src/domain/types/order-type';
import { OrderRepositoryInterface } from '../abstract/repositories/orderRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class OrderRepository implements OrderRepositoryInterface {
  public async create(orderBody: OrderType): Promise<Order | any> {
    const data = {
      ...orderBody,
      restaurant: { connect: { id: orderBody.restaurant } },
      user: { connect: { id: orderBody.user } },
      table: { connect: { id: orderBody.table } },
    };

    if (orderBody.user && orderBody.user !== '') {
      data.user = { connect: { id: orderBody.user } };
    } else {
      delete data.user;
    }

    if (orderBody.table && orderBody.table !== '') {
      data.table = { connect: { id: orderBody.table } };
    } else {
      delete data.table;
    }

    const orderProductsCreated = await Promise.all(
      await orderBody.products.map(async (product, index) => {
        const orderData: any = {
          id: product.id,
          product: { connect: { id: product.id } },
        };

        const orderIngredientsAddedCreated = await Promise.all(
          await product.ingredientsAdded.map(
            async (ingredient) =>
              await prismaDatabase.orderIngredientsAdded.create({
                data: {
                  id: ingredient.id,
                  ingredient: { connect: { id: ingredient.ingredient } },
                  quantity: ingredient.quantity,
                },
              }),
          ),
        ).then((dado) => dado.map((item) => item.id));

        const orderIngredientsRemovedCreated = await Promise.all(
          await product.ingredientsRemoved.map(
            async (ingredient) =>
              await prismaDatabase.orderIngredientsRemoved.create({
                data: {
                  id: ingredient.id,
                  ingredient: { connect: { id: ingredient.ingredient } },
                  quantity: ingredient.quantity,
                },
              }),
          ),
        ).then((dado) => dado.map((item) => item.id));

        return await prismaDatabase.orderProducts.create({
          data: {
            id: orderBody.id + index.toString(),
            product: { connect: { id: product.product } },
            ingredientsAdded: {
              connect: orderIngredientsAddedCreated.map((ingredientId) => {
                return { id: ingredientId };
              }),
            },
            ingredientsRemoved: {
              connect: orderIngredientsRemovedCreated.map((ingredientId) => {
                return { id: ingredientId };
              }),
            },
          },
        });
      }),
    );

    return await prismaDatabase.order
      .create({
        data: {
          ...data,
          products: {
            connect: orderProductsCreated.map((product) => {
              return { id: product.id };
            }),
          },
        },
        include: {
          products: {
            include: {
              product: { include: { category: true, ingredients: true } },
              ingredientsAdded: { include: { ingredient: true } },
              ingredientsRemoved: { include: { ingredient: true } },
            },
          },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(
    orderId: string,
    restaurantId: string,
  ): Promise<Order | any> {
    return await prismaDatabase.order
      .delete({
        where: { id: orderId },
        include: {
          products: {
            include: {
              product: { include: { category: true, ingredients: true } },
              ingredientsAdded: { include: { ingredient: true } },
              ingredientsRemoved: { include: { ingredient: true } },
            },
          },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(
    orderId: string,
    restaurantId: string,
  ): Promise<Order | any> {
    return await prismaDatabase.order
      .findUnique({
        where: { id: orderId },
        include: {
          products: {
            include: {
              product: { include: { category: true, ingredients: true } },
              ingredientsAdded: { include: { ingredient: true } },
              ingredientsRemoved: { include: { ingredient: true } },
            },
          },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<Order[] | any> {
    return await prismaDatabase.order
      .findMany({
        where: { restaurantId: restaurantId },
        include: {
          products: {
            include: {
              product: { include: { category: true, ingredients: true } },
              ingredientsAdded: { include: { ingredient: true } },
              ingredientsRemoved: { include: { ingredient: true } },
            },
          },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(orderBody: OrderType): Promise<Order | any> {
    const data = {
      ...orderBody,
      restaurant: { connect: { id: orderBody.restaurant } },
      user: { connect: { id: orderBody.user } },
      table: { connect: { id: orderBody.table } },
    };

    if (orderBody.user && orderBody.user !== '') {
      data.user = { connect: { id: orderBody.user } };
    } else {
      delete data.user;
    }

    if (orderBody.table && orderBody.table !== '') {
      data.table = { connect: { id: orderBody.table } };
    } else {
      delete data.table;
    }

    const orderProductsCreated = await Promise.all(
      await orderBody.products.map(async (product) => {
        const orderData: any = {
          id: product.id,
          product: { connect: { id: product.id } },
        };

        const orderIngredientsAddedCreated = await Promise.all(
          await product.ingredientsAdded.map(
            async (ingredient) =>
              await prismaDatabase.orderIngredientsAdded.update({
                where: { id: ingredient.id },
                data: {
                  id: ingredient.id,
                  ingredient: { connect: { id: ingredient.ingredient } },
                  quantity: ingredient.quantity,
                },
              }),
          ),
        ).then((dado) => dado.map((item) => item.id));

        const orderIngredientsRemovedCreated = await Promise.all(
          await product.ingredientsRemoved.map(
            async (ingredient) =>
              await prismaDatabase.orderIngredientsRemoved.update({
                where: { id: ingredient.id },
                data: {
                  id: ingredient.id,
                  ingredient: { connect: { id: ingredient.ingredient } },
                  quantity: ingredient.quantity,
                },
              }),
          ),
        ).then((dado) => dado.map((item) => item.id));

        return await prismaDatabase.orderProducts.update({
          where: { id: product.id },
          data: {
            id: orderBody.id,
            product: { connect: { id: product.product } },
            ingredientsAdded: {
              connect: orderIngredientsAddedCreated.map((ingredientId) => {
                return { id: ingredientId };
              }),
            },
            ingredientsRemoved: {
              connect: orderIngredientsRemovedCreated.map((ingredientId) => {
                return { id: ingredientId };
              }),
            },
          },
        });
      }),
    );

    return await prismaDatabase.order
      .update({
        where: { id: orderBody.id },
        data: {
          ...data,
          products: {
            connect: orderProductsCreated.map((product) => {
              return { id: product.id };
            }),
          },
        },
        include: {
          products: {
            include: {
              product: { include: { category: true, ingredients: true } },
              ingredientsAdded: { include: { ingredient: true } },
              ingredientsRemoved: { include: { ingredient: true } },
            },
          },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
