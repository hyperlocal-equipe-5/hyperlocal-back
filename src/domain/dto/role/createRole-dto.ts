export type CreateRoleDto = {
  name: string;
  restaurant: string;
  access?: {
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
