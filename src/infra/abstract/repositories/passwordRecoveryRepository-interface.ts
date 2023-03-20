import { PasswordRecovery } from 'src/domain/entities/passwordRecoveryToken';

export interface PasswordRecoveryRepositoryInterface {
  create(userId: string, validationToken: string): Promise<PasswordRecovery>;
  deleteByToken(token: string): Promise<PasswordRecovery>;
  deleteByUser(userId: string): Promise<null>;
  getOne(validationToken: string): Promise<PasswordRecovery>;
}
