import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { makeAuthMiddlewareFactory } from 'src/main/factories/auth-middleware/authMiddleware-factory';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const authMiddleware = makeAuthMiddlewareFactory();
      const httpRequest: HttpRequest = {
        authorization: req.headers.authorization,
      };

      const user = await authMiddleware.auth(httpRequest);

      req.body.user = user;
      next();
    } catch (error) {
      res.status(401).send(error.message);
      return;
    }
  }
}
