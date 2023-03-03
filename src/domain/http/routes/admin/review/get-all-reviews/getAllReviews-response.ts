/**
 * type get
 * with bearer authorization header
 * /admin/review/get-all-reviews?restaurant=8u93u8z3
 */

import { Review } from 'src/domain/entities/review';

export type GetAllReviewsAdminResponse = HttpResponse<Review[]>;
