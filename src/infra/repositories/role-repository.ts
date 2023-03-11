import { Role } from 'src/domain/entities/role';
import { RoleType } from 'src/domain/types/role-type';
import { RoleRepositoryInterface } from '../abstract/repositories/roleRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class RoleRepository implements RoleRepositoryInterface {
  public async create(roleBody: RoleType): Promise<Role> {
    return await prismaDatabase.role.create({
      data: { ...roleBody, restaurant: { connect: { id: roleBody.id } } },
      include: { restaurant: true, access: true },
    });
  }

  public async delete(roleId: string, restaurantId: string): Promise<Role> {
    return await prismaDatabase.role.delete({
      where: { id: roleId },
      include: { restaurant: true, access: true },
    });
  }

  public async getOne(roleId: string, restaurantId: string): Promise<Role> {
    return await prismaDatabase.role.findUnique({
      where: { id: roleId },
      include: { restaurant: true, access: true },
    });
  }

  public async getAll(restaurantId: string): Promise<Role[]> {
    return await prismaDatabase.role.findMany({
      where: { id: restaurantId },
      include: { restaurant: true, access: true },
    });
  }

  public async update(roleBody: RoleType): Promise<Role> {
    return await prismaDatabase.role.update({
      where: { id: roleBody.id },
      data: { ...roleBody, restaurant: { connect: { id: roleBody.id } } },
      include: { restaurant: true, access: true },
    });
  }
}
