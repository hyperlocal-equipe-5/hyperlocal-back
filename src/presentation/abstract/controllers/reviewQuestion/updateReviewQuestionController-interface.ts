import { ReviewQuestion } from 'src/domain/entities/reviewQuestion';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';

export interface UpdateReviewQuestionControllerInterface {
  execute(httpRequest: HttpRequest): Promise<HttpResponse<ReviewQuestion>>;
}
