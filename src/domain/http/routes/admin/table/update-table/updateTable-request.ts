/**
 * type patch
 * with bearer authorization header
 * /admin/table/update-table?id=328nr283r7&restaurant=8u93u8z3
 */

type UpdateTableAdminRequestBody = {
  number: number;
  restaurant: Restaurant;
};
