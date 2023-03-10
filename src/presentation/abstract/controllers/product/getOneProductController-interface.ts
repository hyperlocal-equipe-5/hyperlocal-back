import { Product } from 'src/domain/entities/product';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface GetOneProductInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Product>>;
}
