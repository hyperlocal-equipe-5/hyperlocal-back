import { GetOneTableUseCaseInterface } from 'src/data/abstract/usecases/table/getOneTableUseCase-interface';
import { Table } from 'src/domain/entities/table';

export class GetOneTableUseCase implements GetOneTableUseCaseInterface {
  public execute(tableId: string, restaurantId: string): Promise<Table> {
    throw new Error('Method not implemented.');
  }
}
