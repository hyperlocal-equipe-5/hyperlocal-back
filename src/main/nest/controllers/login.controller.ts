import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { MakeLoginController } from 'src/presentation/controllers/login/makeLogin-controller';

@ApiTags('/login')
@Controller('/login')
export class LoginController {
  constructor(private readonly makeLoginController: MakeLoginController) {}

  @ApiOperation({
    summary: ''
  })
  @Post()
  async login(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.makeLoginController.execute(httpRequest);
  }
}
