import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';
import { TableType } from '../../../domain/types/table-type';

export interface TableEntityInterface {
  setData(tableDto: CreateTableDto | UpdateTableDto): void;
  validate(): void;
  getBody(): TableType;
  updateBody(mainTable: Table): TableType;
}
