import { UpdateTableUseCaseInterface } from 'src/data/abstract/usecases/table/updateTableUseCase-interface';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';

export class UpdateTableUseCase implements UpdateTableUseCaseInterface {
  public execute(updateTableDto: UpdateTableDto): Promise<Table> {
    throw new Error('Method not implemented.');
  }
}
