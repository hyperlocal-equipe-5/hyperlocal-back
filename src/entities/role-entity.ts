import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';
import { IdGeneratorAdapterInterface } from 'src/utils/adapters/abstract/idGeneratorAdapter-interface';
import { MissingParamError } from 'src/utils/errors/missingParam-error';
import { RoleEntityInterface } from './abstract/interfaces/roleEntity-interface';
import { RoleType } from '../domain/types/role-type';
import { Entity } from './entity';

export class RoleEntity extends Entity implements RoleEntityInterface {
  private roleDto: CreateRoleDto | UpdateRoleDto;
  private readonly idGeneratorAdapter: IdGeneratorAdapterInterface;

  public constructor(idGeneratorAdapter: IdGeneratorAdapterInterface) {
    super();
    this.idGeneratorAdapter = idGeneratorAdapter;
  }

  public setData(roleDto: CreateRoleDto | UpdateRoleDto): void {
    this.roleDto = roleDto;
  }

  public validate(): void {
    if (!this.roleDto.name) {
      throw new MissingParamError('name');
    }

    if (!this.roleDto.restaurant) {
      throw new MissingParamError('restaurant');
    }
  }

  public getBody(): RoleType {
    return {
      roleId: this.idGeneratorAdapter.generateId(),
      name: this.roleDto.name ?? '',
      restaurant: this.roleDto.restaurant,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
      createResteurants: this.roleDto.access.createResteurants,
      createUsers: this.roleDto.access.createUsers,
      createProducts: this.roleDto.access.createProducts,
      createCategories: this.roleDto.access.createCategories,
      createIngredients: this.roleDto.access.createIngredients,
      createOrders: this.roleDto.access.createOrders,
      createRoles: this.roleDto.access.createRoles,
      createTables: this.roleDto.access.createTables,
      readResteurants: this.roleDto.access.readResteurants,
      readUsers: this.roleDto.access.readUsers,
      readProducts: this.roleDto.access.readProducts,
      readCategories: this.roleDto.access.readCategories,
      readIngredients: this.roleDto.access.readIngredients,
      readOrders: this.roleDto.access.readOrders,
      readRoles: this.roleDto.access.readRoles,
      readTables: this.roleDto.access.readTables,
      updateResteurants: this.roleDto.access.updateResteurants,
      updateUsers: this.roleDto.access.updateUsers,
      updateProducts: this.roleDto.access.updateProducts,
      updateCategories: this.roleDto.access.updateCategories,
      updateIngredients: this.roleDto.access.updateIngredients,
      updateOrders: this.roleDto.access.updateOrders,
      updateRoles: this.roleDto.access.updateRoles,
      updateTables: this.roleDto.access.updateTables,
      deleteResteurants: this.roleDto.access.deleteResteurants,
      deleteUsers: this.roleDto.access.deleteUsers,
      deleteProducts: this.roleDto.access.deleteProducts,
      deleteCategories: this.roleDto.access.deleteCategories,
      deleteIngredients: this.roleDto.access.deleteIngredients,
      deleteOrders: this.roleDto.access.deleteOrders,
      deleteRoles: this.roleDto.access.deleteRoles,
      deleteTables: this.roleDto.access.deleteTables,
      defineAccess: this.roleDto.access.defineAccess,
    };
  }

  public updateBody(mainRole: Role): RoleType {
    return {
      roleId: mainRole.roleId,
      name: this.roleDto.name ?? mainRole.name,
      restaurant: this.roleDto.restaurant,
      createResteurants:
        this.roleDto.access.createResteurants ?? mainRole.createResteurants,
      createUsers: this.roleDto.access.createUsers ?? mainRole.createUsers,
      createProducts:
        this.roleDto.access.createProducts ?? mainRole.createProducts,
      createCategories:
        this.roleDto.access.createCategories ?? mainRole.createCategories,
      createIngredients:
        this.roleDto.access.createIngredients ?? mainRole.createIngredients,
      createOrders: this.roleDto.access.createOrders ?? mainRole.createOrders,
      createRoles: this.roleDto.access.createRoles ?? mainRole.createRoles,
      createTables: this.roleDto.access.createTables ?? mainRole.createTables,
      readResteurants:
        this.roleDto.access.readResteurants ?? mainRole.readResteurants,
      readUsers: this.roleDto.access.readUsers ?? mainRole.readUsers,
      readProducts: this.roleDto.access.readProducts ?? mainRole.readProducts,
      readCategories:
        this.roleDto.access.readCategories ?? mainRole.readCategories,
      readIngredients:
        this.roleDto.access.readIngredients ?? mainRole.readIngredients,
      readOrders: this.roleDto.access.readOrders ?? mainRole.readOrders,
      readRoles: this.roleDto.access.readRoles ?? mainRole.readRoles,
      readTables: this.roleDto.access.readTables ?? mainRole.readTables,
      updateResteurants:
        this.roleDto.access.updateResteurants ?? mainRole.updateResteurants,
      updateUsers: this.roleDto.access.updateUsers ?? mainRole.updateUsers,
      updateProducts:
        this.roleDto.access.updateProducts ?? mainRole.updateProducts,
      updateCategories:
        this.roleDto.access.updateCategories ?? mainRole.updateCategories,
      updateIngredients:
        this.roleDto.access.updateIngredients ?? mainRole.updateIngredients,
      updateOrders: this.roleDto.access.updateOrders ?? mainRole.updateOrders,
      updateRoles: this.roleDto.access.updateRoles ?? mainRole.updateRoles,
      updateTables: this.roleDto.access.updateTables ?? mainRole.updateTables,
      deleteResteurants:
        this.roleDto.access.deleteResteurants ?? mainRole.deleteResteurants,
      deleteUsers: this.roleDto.access.deleteUsers ?? mainRole.deleteUsers,
      deleteProducts:
        this.roleDto.access.deleteProducts ?? mainRole.deleteProducts,
      deleteCategories:
        this.roleDto.access.deleteCategories ?? mainRole.deleteCategories,
      deleteIngredients:
        this.roleDto.access.deleteIngredients ?? mainRole.deleteIngredients,
      deleteOrders: this.roleDto.access.deleteOrders ?? mainRole.deleteOrders,
      deleteRoles: this.roleDto.access.deleteRoles ?? mainRole.deleteRoles,
      deleteTables: this.roleDto.access.deleteTables ?? mainRole.deleteTables,
      defineAccess: this.roleDto.access.defineAccess ?? mainRole.defineAccess,
      createdAt: mainRole.createdAt,
      updatedAt: this.getDate(),
    };
  }
}
