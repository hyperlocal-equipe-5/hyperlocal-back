import { GetOneTableUseCaseInterface } from 'src/data/abstract/usecases/table/getOneTableUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { TableRepositoryInterface } from 'src/infra/abstract/repositories/tableRepository-interface';

export class GetOneTableUseCase implements GetOneTableUseCaseInterface {
  private readonly repository: TableRepositoryInterface;

  public constructor(repository: TableRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(tableId: string, restaurantId: string): Promise<Table> {
    const data = await this.repository.getOne(tableId, restaurantId);

    return data;
  }
}
