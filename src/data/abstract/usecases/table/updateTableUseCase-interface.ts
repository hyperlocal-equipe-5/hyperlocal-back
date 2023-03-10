import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';

export interface UpdateTableUseCaseInterface {
  execute(updateTableDto: UpdateTableDto): Promise<Table>;
}
