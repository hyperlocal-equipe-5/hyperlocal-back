import { Controller, Post, Body } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { MakeLoginController } from 'src/presentation/controllers/login/makeLogin-controller';

@Controller('/login')
export class LoginController {
  constructor(private readonly makeLoginController: MakeLoginController) {}

  @Post()
  async login(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.makeLoginController.execute(httpRequest);
  }
}
