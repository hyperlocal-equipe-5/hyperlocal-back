import { GetAllTablesUseCaseInterface } from 'src/data/abstract/usecases/table/getAllTablesUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { TableRepositoryInterface } from 'src/infra/abstract/repositories/tableRepository-interface';

export class GetAllTablesUseCase implements GetAllTablesUseCaseInterface {
  private readonly repository: TableRepositoryInterface;

  public constructor(repository: TableRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(restaurantId: string): Promise<Table[]> {
    const data = await this.repository.getAll(restaurantId);

    return data;
  }
}
