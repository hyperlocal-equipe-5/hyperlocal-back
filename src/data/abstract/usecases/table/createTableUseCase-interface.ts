import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { Table } from 'src/domain/entities/table';

export interface CreateTableUseCaseInterface {
  execute(createTableDto: CreateTableDto): Promise<Table>;
}
