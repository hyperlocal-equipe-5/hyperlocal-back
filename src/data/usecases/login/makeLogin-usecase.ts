import { MakeLoginUseCaseInterface } from 'src/data/abstract/usecases/login/makeLoginUseCase-interface';
import { LoginDto } from 'src/domain/dto/login/login-dto';
import { LoggedType } from 'src/domain/types/logged-type';

export class MakeLoginUseCase implements MakeLoginUseCaseInterface {
  public execute(loginDto: LoginDto): Promise<LoggedType> {
    throw new Error('Method not implemented.');
  }
}
