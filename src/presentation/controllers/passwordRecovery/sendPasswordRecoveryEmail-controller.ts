import { SendPasswordRecoveryEmailUseCaseInterface } from 'src/data/abstract/usecases/passwordRecovery/sendPasswordRecoveryEmailUseCase-interface';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { SendPasswordRecoveryEmailControllerInterface } from 'src/presentation/abstract/controllers/passwordRecovery/sendPasswordRecoveryEmailController-interface';
import { Response } from 'src/utils/http/response';

export class SendPasswordRecoveryEmailController
  implements SendPasswordRecoveryEmailControllerInterface
{
  private readonly sendPasswordRecoveryEmail: SendPasswordRecoveryEmailUseCaseInterface;

  public constructor(
    sendPasswordRecoveryEmail: SendPasswordRecoveryEmailUseCaseInterface,
  ) {
    this.sendPasswordRecoveryEmail = sendPasswordRecoveryEmail;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<{ message: string }>> {
    try {
      const { email } = httpRequest.body;

      const message = await this.sendPasswordRecoveryEmail.execute(email);

      return Response.ok({ message });
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
