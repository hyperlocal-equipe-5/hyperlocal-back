import { Order } from 'src/domain/entities/order';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface DeleteOrderInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Order>>;
}
