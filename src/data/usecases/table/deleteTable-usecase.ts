import { DeleteTableUseCaseInterface } from 'src/data/abstract/usecases/table/deleteTableUseCase-interface';
import { Table } from 'src/domain/entities/table';
import { TableRepositoryInterface } from 'src/infra/abstract/repositories/tableRepository-interface';
import { InvalidParamError } from 'src/utils/errors/invalidParam-error';

export class DeleteTableUseCase implements DeleteTableUseCaseInterface {
  private readonly repository: TableRepositoryInterface;

  public constructor(repository: TableRepositoryInterface) {
    this.repository = repository;
  }

  public async execute(tableId: string, restaurantId: string): Promise<Table> {
    const fountEntity = await this.repository.getOne(tableId, restaurantId);

    if (fountEntity === null) {
      throw new InvalidParamError('Id');
    }

    const deleted = await this.repository.delete(tableId, restaurantId);

    return deleted;
  }
}
