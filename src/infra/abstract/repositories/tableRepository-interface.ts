import { Table } from 'src/domain/entities/table';
import { TableType } from 'src/domain/types/table-type';

export interface TableRepositoryInterface {
  create(tableBody: TableType): Promise<Table>;
  delete(tableId: string, restaurantId: string): Promise<Table>;
  getOne(tableId: string, restaurantId: string): Promise<Table>;
  getAll(restaurantId: string): Promise<Table[]>;
  update(tableBody: TableType): Promise<Table>;
}
