import { GetAllTablesUseCase } from 'src/data/usecases/table/getAllTables-usecase';
import { TableRepository } from 'src/infra/repositories/table-repository';
import { GetAllTablesInterface } from 'src/presentation/abstract/controllers/table/getAllTablesController-interface';
import { GetAllTablesController } from 'src/presentation/controllers/table/getAllTables-controller';

export function makeGetAllTableFactory(): GetAllTablesInterface {
  const repository = new TableRepository();
  const getAlltablesUseCase = new GetAllTablesUseCase(repository);

  return new GetAllTablesController(getAlltablesUseCase);
}
