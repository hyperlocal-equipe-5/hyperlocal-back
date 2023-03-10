import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';

export interface AuthMiddlewareInterface {
  auth(httpRequest: HttpRequest): Promise<User>;
}
