import { UpdateTableUseCaseInterface } from 'src/data/abstract/usecases/table/updateTableUseCase-interface';
import { UpdateTableDto } from 'src/domain/dto/table/updateTable-dto';
import { Table } from 'src/domain/entities/table';
import { TableEntityInterface } from 'src/entities/abstract/interfaces/tableEntity-interface';
import { TableRepositoryInterface } from 'src/infra/abstract/repositories/tableRepository-interface';

export class UpdateTableUseCase implements UpdateTableUseCaseInterface {
  private readonly entity: TableEntityInterface;
  private readonly repository: TableRepositoryInterface;

  public async execute(updateTableDto: UpdateTableDto): Promise<Table> {
    this.entity.setData(updateTableDto);

    const { id, restaurant } = updateTableDto;
    const foundCategory = await this.repository.getOne(id, restaurant);
    const body = this.entity.updateBody(foundCategory);
    const response = await this.repository.update(body);

    return response;
  }
}
