import { MakeLoginUseCaseInterface } from 'src/data/abstract/usecases/login/makeLoginUseCase-interface';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { LoggedType } from 'src/domain/types/logged-type';
import { MakeLoginControllerInterface } from 'src/presentation/abstract/controllers/login/makeLoginController-interface';
import { Response } from 'src/utils/http/response';

export class MakeLoginController implements MakeLoginControllerInterface {
  private readonly makeLoginUsecase: MakeLoginUseCaseInterface;

  public constructor(makeLoginUsecase: MakeLoginUseCaseInterface) {
    this.makeLoginUsecase = makeLoginUsecase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<LoggedType>> {
    try {
      const loginDto = httpRequest.body;
      const makeLogin = await this.makeLoginUsecase.execute(loginDto);

      return Response.ok(makeLogin);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
