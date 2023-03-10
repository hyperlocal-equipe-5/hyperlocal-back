import { UpdateTableUseCase } from 'src/data/usecases/table/updateTable-usecase';
import { TableEntity } from 'src/entities/table-entity';
import { TableRepository } from 'src/infra/repositories/table-repository';
import { UpdateTableInterface } from 'src/presentation/abstract/controllers/table/updateTableController-interface';
import { UpdateTableController } from 'src/presentation/controllers/table/updateTable-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeUpdateTableFactory(): UpdateTableInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new TableEntity(idGeneratorAdapter);
  const repository = new TableRepository();
  const updateTableUseCase = new UpdateTableUseCase(entity, repository);

  return new UpdateTableController(updateTableUseCase);
}
