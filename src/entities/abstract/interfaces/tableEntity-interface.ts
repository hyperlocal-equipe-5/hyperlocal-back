import { Table } from 'src/domain/entities/table';
import { TableType } from '../types/table-type';

export interface TableEntityInterface {
  validate(): void;
  getBody(): TableType;
  updateBody(mainTable: Table): TableType;
}
