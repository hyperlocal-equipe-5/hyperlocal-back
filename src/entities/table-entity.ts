import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { TableEntityInterface } from './abstract/interfaces/tableEntity-interface';
import { TableType } from '../domain/types/table-type';
import { Entity } from './entity';

export class TableEntity extends Entity implements TableEntityInterface {
  private tableDto: CreateTableDto | UpdateTableDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(tableDto: CreateTableDto | UpdateTableDto): void {
    this.tableDto = tableDto;
  }

  public validate(): void {
    if (!this.tableDto.number) {
      throw new MissingParamError('number');
    }

    if (!this.tableDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): TableType {
    return {
      tableId: this.idGeneratorAdapter.generateId(),
      number: this.tableDto.number ?? 0,
      restaurant: this.tableDto.restaurant,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainTable: Table): TableType {
    return {
      tableId: mainTable.tableId,
      number: this.tableDto.number ?? mainTable.number,
      restaurant: this.tableDto.restaurant,
      createdAt: mainTable.createdAt,
      updatedAt: this.getDate(),
    };
  }
}
