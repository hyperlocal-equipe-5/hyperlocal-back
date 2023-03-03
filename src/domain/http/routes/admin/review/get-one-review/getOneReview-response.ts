/**
 * type get
 * with bearer authorization header
 * /admin/review/get-one-review?id=8732y8723ye78?restaurant=8u93u8z3
 */

import { Review } from 'src/domain/entities/review';

export type GetOneReviewAdminResponse = HttpResponse<Review>;
