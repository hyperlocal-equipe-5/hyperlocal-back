import { GetAllTablesUseCaseInterface } from 'src/data/abstract/usecases/table/getAllTablesUseCase-interface';
import { Table } from 'src/domain/entities/table';

export class GetAllTablesUseCase implements GetAllTablesUseCaseInterface {
  public execute(restaurantId: string): Promise<Table[]> {
    throw new Error('Method not implemented.');
  }
}
