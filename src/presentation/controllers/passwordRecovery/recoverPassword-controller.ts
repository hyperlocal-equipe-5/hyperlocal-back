import { RecoverPasswordUseCaseInterface } from 'src/data/abstract/usecases/passwordRecovery/recoverPasswordUseCase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { RecoverPasswordControllerInterface } from 'src/presentation/abstract/controllers/passwordRecovery/recoverPasswordController-interface';
import { Response } from 'src/utils/http/response';

export class RecoverPasswordController
  implements RecoverPasswordControllerInterface
{
  private readonly recoverPasswordUseCase: RecoverPasswordUseCaseInterface;

  public constructor(recoverPasswordUseCase: RecoverPasswordUseCaseInterface) {
    this.recoverPasswordUseCase = recoverPasswordUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<User>> {
    try {
      const updatedUser = await this.recoverPasswordUseCase.execute(
        httpRequest.body,
      );

      return Response.ok(updatedUser);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
