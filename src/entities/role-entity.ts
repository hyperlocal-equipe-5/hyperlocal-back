import { CreateRoleDto } from 'src/domain/dto/role/createRole-dto';
import { UpdateRoleDto } from 'src/domain/dto/role/updateRole-dto';
import { Role } from 'src/domain/entities/role';
import { IdGeneratorAdapterInterface } from 'src/utils/abstract/adapters/idGeneratorAdapter-interface';
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
    const id = this.idGeneratorAdapter.generateId();

    return {
      id: id,
      name: this.roleDto.name ?? '',
      access: this.getAccess(id),
      restaurant: this.roleDto.restaurant,
      createdAt: this.getDate(),
      updatedAt: this.getDate(),
    };
  }

  public updateBody(mainRole: Role): RoleType {
    const id = mainRole.id;

    return {
      id: id,
      name: this.roleDto.name ?? mainRole.name,
      restaurant: mainRole.restaurant.id,
      access: this.roleDto.access ? this.getAccess(id) : mainRole.access,
      createdAt: mainRole.createdAt,
      updatedAt: this.getDate(),
    };
  }

  private getAccess(accessId: string) {
    {
      return {
        id: accessId,
        createRestaurants: !this.roleDto.access
          ? false
          : this.roleDto.access.createRestaurants ?? false,
        createUsers: !this.roleDto.access
          ? false
          : this.roleDto.access.createUsers ?? false,
        createProducts: !this.roleDto.access
          ? false
          : this.roleDto.access.createProducts ?? false,
        createCategories: !this.roleDto.access
          ? false
          : this.roleDto.access.createCategories ?? false,
        createIngredients: !this.roleDto.access
          ? false
          : this.roleDto.access.createIngredients ?? false,
        createOrders: !this.roleDto.access
          ? false
          : this.roleDto.access.createOrders ?? false,
        createRoles: !this.roleDto.access
          ? false
          : this.roleDto.access.createRoles ?? false,
        createTables: !this.roleDto.access
          ? false
          : this.roleDto.access.createTables ?? false,
        createReviewQuestions: !this.roleDto.access
          ? false
          : this.roleDto.access.createReviewQuestions,
        readRestaurants: !this.roleDto.access
          ? false
          : this.roleDto.access.readRestaurants ?? false,
        readUsers: !this.roleDto.access
          ? false
          : this.roleDto.access.readUsers ?? false,
        readProducts: !this.roleDto.access
          ? false
          : this.roleDto.access.readProducts ?? false,
        readCategories: !this.roleDto.access
          ? false
          : this.roleDto.access.readCategories ?? false,
        readIngredients: !this.roleDto.access
          ? false
          : this.roleDto.access.readIngredients ?? false,
        readOrders: !this.roleDto.access
          ? false
          : this.roleDto.access.readOrders ?? false,
        readRoles: !this.roleDto.access
          ? false
          : this.roleDto.access.readRoles ?? false,
        readTables: !this.roleDto.access
          ? false
          : this.roleDto.access.readTables ?? false,
        readReviewQuestions: !this.roleDto.access
          ? false
          : this.roleDto.access.readReviewQuestions,
        updateRestaurants: !this.roleDto.access
          ? false
          : this.roleDto.access.updateRestaurants ?? false,
        updateUsers: !this.roleDto.access
          ? false
          : this.roleDto.access.updateUsers ?? false,
        updateProducts: !this.roleDto.access
          ? false
          : this.roleDto.access.updateProducts ?? false,
        updateCategories: !this.roleDto.access
          ? false
          : this.roleDto.access.updateCategories ?? false,
        updateIngredients: !this.roleDto.access
          ? false
          : this.roleDto.access.updateIngredients ?? false,
        updateOrders: !this.roleDto.access
          ? false
          : this.roleDto.access.updateOrders ?? false,
        updateRoles: !this.roleDto.access
          ? false
          : this.roleDto.access.updateRoles ?? false,
        updateTables: !this.roleDto.access
          ? false
          : this.roleDto.access.updateTables ?? false,
        updateReviewQuestions: !this.roleDto.access
          ? false
          : this.roleDto.access.updateReviewQuestions,
        deleteRestaurants: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteRestaurants ?? false,
        deleteUsers: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteUsers ?? false,
        deleteProducts: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteProducts ?? false,
        deleteCategories: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteCategories ?? false,
        deleteIngredients: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteIngredients ?? false,
        deleteOrders: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteOrders ?? false,
        deleteRoles: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteRoles ?? false,
        deleteTables: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteTables ?? false,
        deleteReviewQuestions: !this.roleDto.access
          ? false
          : this.roleDto.access.deleteReviewQuestions,
        defineAccess: !this.roleDto.access
          ? false
          : this.roleDto.access.defineAccess ?? false,
      };
    }
  }
}
