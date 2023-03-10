import { DeleteTableUseCase } from 'src/data/usecases/table/deleteTable-usecase';
import { TableRepository } from 'src/infra/repositories/table-repository';
import { DeleteTableInterface } from 'src/presentation/abstract/controllers/table/deleteTableController-interface';
import { DeleteTableController } from 'src/presentation/controllers/table/deleteTable-controller';

export function makeDeleteTableFactory(): DeleteTableInterface {
  const repository = new TableRepository();
  const deleteTableUseCase = new DeleteTableUseCase(repository);

  return new DeleteTableController(deleteTableUseCase);
}
