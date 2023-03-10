import { Table } from 'src/domain/entities/table';

export interface GetAllTablesUseCaseInterface {
  execute(restaurantId: string): Promise<Table[]>;
}
