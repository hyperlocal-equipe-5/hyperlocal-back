import { Order } from 'src/domain/entities/order';
import { OrderType } from 'src/domain/types/order-type';
import { OrderRepositoryInterface } from '../abstract/repositories/orderRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class OrderRepository implements OrderRepositoryInterface {
  public async create(orderBody: OrderType): Promise<Order | any> {
    return await prismaDatabase.order
      .create({
        data: {
          ...orderBody,
          table: { connect: { id: orderBody.table } },
          user: { connect: { id: orderBody.user } },
          restaurant: { connect: { id: orderBody.restaurant } },
          products: {
            connect: orderBody.products.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          products: { include: { category: true, ingredients: true } },
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
          products: { include: { category: true, ingredients: true } },
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
          products: { include: { category: true, ingredients: true } },
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
          products: { include: { category: true, ingredients: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(orderBody: OrderType): Promise<Order | any> {
    return await prismaDatabase.order
      .update({
        where: { id: orderBody.id },
        data: {
          ...orderBody,
          table: { connect: { id: orderBody.table } },
          user: { connect: { id: orderBody.user } },
          restaurant: { connect: { id: orderBody.restaurant } },
          products: {
            connect: orderBody.products.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          products: { include: { category: true, ingredients: true } },
          restaurant: true,
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
