import { Controller, Post, Body, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { RecoverPasswordController } from 'src/presentation/controllers/passwordRecovery/recoverPassword-controller';
import { SendPasswordRecoveryEmailController } from 'src/presentation/controllers/passwordRecovery/sendPasswordRecoveryEmail-controller';
import { RecoverPassword } from '../../dtos/passwordRecovery/recoverPassword-dto';
import { RequestRecovery } from '../../dtos/passwordRecovery/requestRecovery-dto';

@ApiTags('/password-recovery')
@Controller('/password-recovery')
export class PasswordRecoveryController {
  constructor(
    private readonly recoverPasswordController: RecoverPasswordController,
    private readonly sendPasswordRecoveryEmailController: SendPasswordRecoveryEmailController,
  ) {}

  @ApiOperation({
    summary: 'Route to perform the password recovery system.',
  })
  @Post()
  async requestRecovery(@Body() body: RequestRecovery) {
    const httpRequest: HttpRequest = { body };

    return await this.sendPasswordRecoveryEmailController.execute(httpRequest);
  }

  @Patch()
  async recoverPassword(@Body() body: RecoverPassword) {
    const httpRequest: HttpRequest = { body };

    return this.recoverPasswordController.execute(httpRequest);
  }
}
