import { Table } from 'src/domain/entities/table';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface CreateTableInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Table>>;
}
