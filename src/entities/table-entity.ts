import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { TableEntityInterface } from './abstract/interfaces/tableEntity-interface';
import { TableType } from './abstract/types/table-type';
import { Entity } from './entity';

export class TableEntity extends Entity implements TableEntityInterface {
  private readonly tableDto: CreateTableDto | UpdateTableDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(
    tableDto: CreateTableDto | UpdateTableDto,
    idGeneratorAdapter: IdGeneratorAdapterInterface,
  ) {
    super();
    this.tableDto = tableDto;
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public validate(): void {
    throw new Error('Method not implemented.');
  }

  public getBody(): TableType {
    return {
      id: this.idGeneratorAdapter.generateId(),
      number: this.tableDto.number ?? 0,
      restaurant: this.tableDto.restaurant,
      createdOn: this.getDate(),
      updatedOn: this.getDate(),
    };
  }

  public updateBody(mainTable: Table): TableType {
    return {
      id: mainTable.id,
      number: this.tableDto.number ?? mainTable.number,
      restaurant: this.tableDto.restaurant,
      createdOn: mainTable.createdOn,
      updatedOn: this.getDate(),
    };
  }
}
