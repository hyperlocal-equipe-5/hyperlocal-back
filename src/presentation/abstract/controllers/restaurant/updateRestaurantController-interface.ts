import { Restaurant } from 'src/domain/entities/restaurant';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface UpdateRestaurantInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Restaurant>>;
}
