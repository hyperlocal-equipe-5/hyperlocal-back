import { PasswordRecovery } from 'src/domain/entities/passwordRecoveryToken';
import { PasswordRecoveryRepositoryInterface } from '../abstract/repositories/passwordRecoveryRepository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class PasswordRecoveryRepository
  implements PasswordRecoveryRepositoryInterface
{
  public async create(
    userId: string,
    validationToken: string,
  ): Promise<PasswordRecovery> {
    return await prismaDatabase.passwordRecoveryToken
      .create({
        data: { id: validationToken, user: { connect: { id: userId } } },
        include: {
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return { user: data.user, token: data.id };
      });
  }

  public async deleteByToken(
    validationToken: string,
  ): Promise<PasswordRecovery> {
    return await prismaDatabase.passwordRecoveryToken
      .delete({
        where: { id: validationToken },
        include: {
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return { user: data.user, token: data.id };
      });
  }

  public async deleteByUser(userId: string): Promise<null> {
    return await prismaDatabase.passwordRecoveryToken
      .deleteMany({
        where: { userId: userId },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return null;
      });
  }

  public async getOne(validationToken: string): Promise<PasswordRecovery> {
    return await prismaDatabase.passwordRecoveryToken
      .findUnique({
        where: { id: validationToken },
        include: {
          user: {
            include: {
              role: { include: { restaurant: true, access: true } },
              restaurant: true,
            },
          },
        },
      })
      .then((data) => {
        prismaDatabase.$disconnect();
        return { user: data.user, token: data.id };
      });
  }
}
