import { Table } from 'src/domain/entities/table';

export interface GetOneTableUseCaseInterface {
  execute(tableId: string, restaurantId: string): Promise<Table>;
}
