import { Category } from 'src/domain/entities/category';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface DeleteCategoryInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Category>>;
}
