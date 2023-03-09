import { CreateTableUseCase } from 'src/data/usecases/table/createTable-usecase';
import { TableEntity } from 'src/entities/table-entity';
import { TableRepository } from 'src/infra/repositories/table-repository';
import { CreateTableInterface } from 'src/presentation/abstract/controllers/table/createTableController-interface';
import { CreateTableController } from 'src/presentation/controllers/table/createTable-controller';
import { IdGeneratorAdapter } from 'src/utils/adapters/idGenerator-adapter';

export function makeCreateTableFactory(): CreateTableInterface {
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const entity = new TableEntity(idGeneratorAdapter);
  const repository = new TableRepository();
  const createTableUseCase = new CreateTableUseCase(entity, repository);

  return new CreateTableController(createTableUseCase);
}
