import { CreateTableUseCaseInterface } from 'src/data/abstract/usecases/table/createTableUseCase-interface';
import { CreateTableDto } from 'src/domain/dto/table/createTable-dto';
import { Table } from 'src/domain/entities/table';

export class CreateTableUseCase implements CreateTableUseCaseInterface {
  public execute(createTableDto: CreateTableDto): Promise<Table> {
    throw new Error('Method not implemented.');
  }
}
