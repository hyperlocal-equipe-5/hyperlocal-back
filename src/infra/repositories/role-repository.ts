import { Role } from "src/domain/entities/role";
import { RoleType } from "src/domain/types/role-type";
import { RoleRepositoryInterface } from "../abstract/repositories/roleRepository-interface";

export class RoleRepository implements RoleRepositoryInterface{
  public create(roleBody: RoleType): Promise<Role> {
    throw new Error("Method not implemented.");
  }
  public delete(roleId: string, restaurantId: string): Promise<Role> {
    throw new Error("Method not implemented.");
  }
  public getOne(roleId: string, restaurantId: string): Promise<Role> {
    throw new Error("Method not implemented.");
  }
  public getAll(roleId: string): Promise<Role[]> {
    throw new Error("Method not implemented.");
  }
  public update(roleBody: RoleType): Promise<Role> {
    throw new Error("Method not implemented.");
  }

}
