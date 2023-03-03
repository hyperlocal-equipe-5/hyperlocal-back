import { Table } from 'src/domain/entities/table';

export interface TableEntityInterface {
  validate(): void;
  getBody(): Table;
  updateBody(): Table;
}
