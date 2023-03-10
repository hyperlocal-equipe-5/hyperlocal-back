import { Order } from 'src/domain/entities/order';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface GetAllOrdersInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Order[]>>;
}
