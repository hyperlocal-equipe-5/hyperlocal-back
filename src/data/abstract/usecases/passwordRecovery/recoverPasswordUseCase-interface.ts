import { UpdatePasswordDto } from 'src/domain/dto/passwordRecovery/updatePassword-dto';
import { User } from 'src/domain/entities/user';

export interface RecoverPasswordUseCaseInterface {
  execute(updatePasswordDto: UpdatePasswordDto): Promise<User>;
}
