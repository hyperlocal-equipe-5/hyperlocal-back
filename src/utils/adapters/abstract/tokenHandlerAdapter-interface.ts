import { User } from 'src/domain/entities/user';

export interface TokenHandlerAdapterInterface {
  generateToken(userId: string, secret: string): string;
  validateToken(token: string, secret: string): Promise<User>;
}
