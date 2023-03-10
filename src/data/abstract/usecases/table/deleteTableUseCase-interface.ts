import { Table } from 'src/domain/entities/table';

export interface DeleteTableUseCaseInterface {
  execute(tableId: string, restaurantId: string): Promise<Table>;
}
