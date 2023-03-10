import { UpdateUserUseCaseInterface } from 'src/data/abstract/usecases/user/updateUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateUserControllerInterface } from 'src/presentation/abstract/controllers/user/updateUserController-interface';
import { Response } from 'src/utils/http/response';

export class UpdateUserController implements UpdateUserControllerInterface {
  private readonly updateUserUseCase: UpdateUserUseCaseInterface;

  public constructor(updateUserUseCase: UpdateUserUseCaseInterface) {
    this.updateUserUseCase = updateUserUseCase;
  }
  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<User>> {
    try {
      const updateUserDto = httpRequest.body;
      const updatedUser = await this.updateUserUseCase.execute(updateUserDto);

      return Response.ok(updatedUser);
    } catch (error) {
      return Response.badRequest(error.message);
    }
  }
}
