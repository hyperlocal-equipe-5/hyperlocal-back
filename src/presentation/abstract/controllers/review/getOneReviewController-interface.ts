import { Review } from 'src/domain/entities/review';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface GetOneReviewInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<Review>>;
}
