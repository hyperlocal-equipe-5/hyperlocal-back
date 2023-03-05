import { DeleteTableUseCaseInterface } from 'src/data/abstract/usecases/table/deleteTableUseCase-interface';
import { Table } from 'src/domain/entities/table';

export class DeleteTableUseCase implements DeleteTableUseCaseInterface {
  public execute(tableId: string, restaurantId: string): Promise<Table> {
    throw new Error('Method not implemented.');
  }
}
