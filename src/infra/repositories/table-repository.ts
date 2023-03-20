import { Table } from 'src/domain/entities/table';
import { TableType } from 'src/domain/types/table-type';
import { TableRepositoryInterface } from '../abstract/repositories/tableRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class TableRepository implements TableRepositoryInterface {
  public async create(tableBody: TableType): Promise<Table> {
    return await prismaDatabase.table
      .create({
        data: {
          ...tableBody,
          restaurant: { connect: { id: tableBody.restaurant } },
        },
        include: { restaurant: true },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async delete(tableId: string, restaurantId: string): Promise<Table> {
    return await prismaDatabase.table
      .delete({
        where: { id: tableId },
        include: { restaurant: true },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getOne(tableId: string, restaurantId: string): Promise<Table> {
    return await prismaDatabase.table
      .findUnique({
        where: { id: tableId },
        include: { restaurant: true },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async getAll(restaurantId: string): Promise<Table[]> {
    return await prismaDatabase.table
      .findMany({
        where: { restaurantId: restaurantId },
        include: { restaurant: true },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }

  public async update(tableBody: TableType): Promise<Table> {
    return await prismaDatabase.table
      .update({
        where: { id: tableBody.id },
        data: {
          ...tableBody,
          restaurant: { connect: { id: tableBody.restaurant } },
        },
        include: { restaurant: true },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return data;
      });
  }
}
