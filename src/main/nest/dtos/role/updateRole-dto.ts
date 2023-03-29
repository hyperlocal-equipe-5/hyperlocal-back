import { ApiProperty } from '@nestjs/swagger';

export class UpdateRole {
  @ApiProperty()
  name: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty({
    example: {
      createRestaurants: true,
      createUsers: true,
      createProducts: true,
      createCategories: true,
      createIngredients: true,
      createOrders: true,
      createRoles: true,
      createTables: true,
      readRestaurants: true,
      readUsers: true,
      readProducts: true,
      readCategories: true,
      readIngredients: true,
      readOrders: true,
      readRoles: true,
      readTables: true,
      updateRestaurants: true,
      updateUsers: true,
      updateProducts: true,
      updateCategories: true,
      updateIngredients: true,
      updateOrders: true,
      updateRoles: true,
      updateTables: true,
      deleteRestaurants: true,
      deleteUsers: true,
      deleteProducts: true,
      deleteCategories: true,
      deleteIngredients: true,
      deleteOrders: true,
      deleteRoles: true,
      deleteTables: true,
      defineAccess: true,
    },
  })
  access?: {
    createRestaurants?: boolean;
    createUsers?: boolean;
    createProducts?: boolean;
    createCategories?: boolean;
    createIngredients?: boolean;
    createOrders?: boolean;
    createRoles?: boolean;
    createTables?: boolean;
    createReviewQuestions?: boolean;
    readRestaurants?: boolean;
    readUsers?: boolean;
    readProducts?: boolean;
    readCategories?: boolean;
    readIngredients?: boolean;
    readOrders?: boolean;
    readRoles?: boolean;
    readTables?: boolean;
    readReviewQuestions?: boolean;
    updateRestaurants?: boolean;
    updateUsers?: boolean;
    updateProducts?: boolean;
    updateCategories?: boolean;
    updateIngredients?: boolean;
    updateOrders?: boolean;
    updateRoles?: boolean;
    updateTables?: boolean;
    updateReviewQuestions?: boolean;
    deleteRestaurants?: boolean;
    deleteUsers?: boolean;
    deleteProducts?: boolean;
    deleteCategories?: boolean;
    deleteIngredients?: boolean;
    deleteOrders?: boolean;
    deleteRoles?: boolean;
    deleteTables?: boolean;
    deleteReviewQuestions?: boolean;
    defineAccess?: boolean;
  };
}
