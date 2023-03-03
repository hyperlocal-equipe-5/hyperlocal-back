/**
 * type post
 * /reviews/review
 */

import { Review } from 'src/domain/entities/review';

export type ReviewResponse = HttpResponse<Review>;
