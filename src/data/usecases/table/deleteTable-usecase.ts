import { DeleteTableUseCaseInterface } from 'src/data/abstract/usecases/table/deleteTableUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { TableRepositoryInterface } from 'src/infra/abstract/repositories/tableRepository-interface';

export class DeleteTableUseCase implements DeleteTableUseCaseInterface {
  private readonly repository: TableRepositoryInterface;

  public constructor(repository: TableRepositoryInterface) {
    this.repository = repository;
  }

  public execute(tableId: string, restaurantId: string): Promise<Table> {
    const deleted = this.repository.delete(tableId, restaurantId);

    return deleted;
  }
}
