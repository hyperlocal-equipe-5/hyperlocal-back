import { Ingredient } from 'src/domain/entities/ingredient';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface GetOneIngredientInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Ingredient>>;
}
