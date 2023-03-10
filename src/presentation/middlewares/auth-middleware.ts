import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { TokenHandlerAdapterInterface } from 'src/utils/adapters/abstract/tokenHandlerAdapter-interface';
import { UnauthorizedError } from 'src/utils/errors/unauthorized-error';
import { AuthMiddlewareInterface } from '../abstract/middlewares/authMiddleware-interface';

export class AuthMiddleware implements AuthMiddlewareInterface {
  private readonly tokenHandler: TokenHandlerAdapterInterface;

  public constructor(tokenHandler: TokenHandlerAdapterInterface) {
    this.tokenHandler = tokenHandler;
  }

  public async auth(httpRequest: HttpRequest): Promise<User> {
    try {
      const authorization = httpRequest.authorization;

      if (!authorization) {
        throw new UnauthorizedError('Invalid Token');
      }

      const split = authorization.split(' ');

      if (!split || split[0] !== 'Bearer' || split.length !== 2) {
        throw new UnauthorizedError('Invalid Token');
      }

      const secret = process.env.SECRET;
      const user = await this.tokenHandler.validateToken(split[1], secret);

      return user;
    } catch (error) {
      throw new UnauthorizedError('Invalid Token');
    }
  }
}
