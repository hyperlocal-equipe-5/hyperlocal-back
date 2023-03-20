import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface SendPasswordRecoveryEmailControllerInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<{ message: string }>>;
}
