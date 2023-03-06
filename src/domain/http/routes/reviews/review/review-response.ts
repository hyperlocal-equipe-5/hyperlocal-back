/**
 * type post
 * /reviews/review
 */

import { Review } from 'src/domain/entities/review';
import { HttpResponse } from 'src/domain/http/response';

export type ReviewResponse = HttpResponse<Review>;
