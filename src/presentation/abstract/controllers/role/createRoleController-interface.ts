import { Role } from 'src/domain/entities/role';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface CreateRoleInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Role>>;
}
