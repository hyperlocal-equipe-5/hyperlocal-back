import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';
import { TableEntityInterface } from './abstract/tableEntity-interface';

export class TableEntity implements TableEntityInterface {
  constructor(private readonly tableDto: CreateTableDto | UpdateTableDto) {}

  validate(): void {
    throw new Error('Method not implemented.');
  }

  getBody(): Table {
    throw new Error('Method not implemented.');
  }

  updateBody(mainTable: Table): Table {
    throw new Error('Method not implemented.');
  }
}
