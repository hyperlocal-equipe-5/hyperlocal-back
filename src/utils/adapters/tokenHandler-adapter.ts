import * as jwt from 'jsonwebtoken';
import { GetOneUserUseCaseInterface } from 'src/data/abstract/usecases/user/getOneUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { InvalidParamError } from '../errors/invalidParam-error';
import { TokenHandlerAdapterInterface } from './abstract/tokenHandlerAdapter-interface';

export class TokenHandlerAdapter implements TokenHandlerAdapterInterface {
  public constructor(
    private readonly getOneUserUseCaseInterface: GetOneUserUseCaseInterface,
  ) {}

  public generateToken(userId: string, secret: string): string {
    return jwt.sign({ id: userId }, secret, {
      expiresIn: 86400,
    });
  }

  public async validateToken(token: string, secret: string): Promise<User> {
    let mainUser: User;
    await jwt.verify(token, secret, async (error, decoded: User) => {
      try {
        if (error) {
          throw new InvalidParamError('Token');
        }

        const userId = decoded.id;

        const user = await this.getOneUserUseCaseInterface.execute(userId, '');

        if (!user || !user.id) {
          throw new InvalidParamError('token');
        }

        mainUser = user;
        return;
      } catch (error) {
        throw new InvalidParamError('token');
      }
    });
    return mainUser;
  }
}
