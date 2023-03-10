import { LoginDto } from 'src/domain/dto/login/login-dto';
import { LoggedType } from 'src/domain/types/logged-type';

export interface MakeLoginUseCaseInterface {
  execute(loginDto: LoginDto): Promise<LoggedType>;
}
