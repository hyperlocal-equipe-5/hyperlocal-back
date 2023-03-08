import { CreateTableUseCaseInterface } from 'src/data/abstract/usecases/table/createTableUseCase-interface';
import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { Table } from 'src/domain/entities/table';
import { TableEntityInterface } from 'src/entities/abstract/interfaces/tableEntity-interface';
import { TableRepositoryInterface } from 'src/infra/abstract/repositories/tableRepository-interface';

export class CreateTableUseCase implements CreateTableUseCaseInterface {
  private readonly entity: TableEntityInterface;
  private readonly repository: TableRepositoryInterface;

  public constructor(
    entity: TableEntityInterface,
    repository: TableRepositoryInterface,
  ) {
    this.entity = entity;
    this.repository = repository;
  }

  public async execute(createTableDto: CreateTableDto): Promise<Table> {
    this.entity.setData(createTableDto);

    const body = this.entity.getBody();
    const response = await this.repository.create(body);

    return response;
  }
}
