import { GetOneTableUseCase } from 'src/data/usecases/table/getOneTable-usecase';
import { TableRepository } from 'src/infra/repositories/table-repository';
import { GetOneTableInterface } from 'src/presentation/abstract/controllers/table/getOneTableController-interface';
import { GetOneTableController } from 'src/presentation/controllers/table/getOneTable-controller';

export function makeGetOneTableFactory(): GetOneTableInterface {
  const repository = new TableRepository();
  const getOneTableUseCase = new GetOneTableUseCase(repository);

  return new GetOneTableController(getOneTableUseCase);
}
