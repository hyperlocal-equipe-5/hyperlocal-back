/**
 * type patch
 * with bearer authorization header
 * /admin/role/update-role?id=328nr283r7&restaurant=8u93u8z3
 */

type UpdateRoleAdminRequestBody = {
  name: string;
  restaurant: Restaurant;
  access: {
    createResteurants?: boolean;
    createUsers?: boolean;
    createProducts?: boolean;
    createCategories?: boolean;
    createIngredients?: boolean;
    createOrders?: boolean;
    createRoles?: boolean;
    createTables?: boolean;
    readResteurants?: boolean;
    readUsers?: boolean;
    readProducts?: boolean;
    readCategories?: boolean;
    readIngredients?: boolean;
    readOrders?: boolean;
    readRoles?: boolean;
    readTables?: boolean;
    updateResteurants?: boolean;
    updateUsers?: boolean;
    updateProducts?: boolean;
    updateCategories?: boolean;
    updateIngredients?: boolean;
    updateOrders?: boolean;
    updateRoles?: boolean;
    updateTables?: boolean;
    deleteResteurants?: boolean;
    deleteUsers?: boolean;
    deleteProducts?: boolean;
    deleteCategories?: boolean;
    deleteIngredients?: boolean;
    deleteOrders?: boolean;
    deleteRoles?: boolean;
    deleteTables?: boolean;
    defineAccess?: boolean;
  };
};
