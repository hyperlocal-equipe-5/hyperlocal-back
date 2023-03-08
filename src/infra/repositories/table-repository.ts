import { Table } from "src/domain/entities/table";
import { TableType } from "src/domain/types/table-type";
import { TableRepositoryInterface } from "../abstract/repositories/tableRepository-interface";

export class TableRepository implements TableRepositoryInterface{
  public create(tableBody: TableType): Promise<Table> {
    throw new Error("Method not implemented.");
  }
  public delete(tableId: string, restaurantId: string): Promise<Table> {
    throw new Error("Method not implemented.");
  }
  public getOne(tableId: string, restaurantId: string): Promise<Table> {
    throw new Error("Method not implemented.");
  }
  public getAll(tableId: string): Promise<Table[]> {
    throw new Error("Method not implemented.");
  }
  public update(tableBody: TableType): Promise<Table> {
    throw new Error("Method not implemented.");
  }

}
