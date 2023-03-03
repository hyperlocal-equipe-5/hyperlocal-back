import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';

export interface TableEntityInterface {
  constructor(tableDto: CreateTableDto | UpdateTableDto): void;
  validate(): void;
  getBody(): Table;
  updateBody(mainTable: Table): Table;
}
