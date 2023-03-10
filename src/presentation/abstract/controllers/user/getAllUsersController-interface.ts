import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface GetAllUsersControllerInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<User[]>>;
}
