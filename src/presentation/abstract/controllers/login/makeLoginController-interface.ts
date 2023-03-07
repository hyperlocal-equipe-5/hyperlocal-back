import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { LoggedType } from 'src/domain/types/logged-type';

export interface MakeLoginControllerInterface {
  execute(httpRequest: HttpRequest): HttpResponse<LoggedType>;
}
