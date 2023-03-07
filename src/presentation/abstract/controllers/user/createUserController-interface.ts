import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/request';
import { HttpResponse } from 'src/domain/http/response';

export interface CreateUserControllerInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<User>>;
}
