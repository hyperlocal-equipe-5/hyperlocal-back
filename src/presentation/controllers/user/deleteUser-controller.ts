import { DeleteUserUseCaseInterface } from 'src/data/abstract/usecases/user/deleteUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteUserControllerInterface } from 'src/presentation/abstract/controllers/user/deleteUserController-interface';
import { Response } from 'src/utils/http/response';

export class DeleteUserController implements DeleteUserControllerInterface {
  private readonly deleteUserUseCase: DeleteUserUseCaseInterface;
  public constructor(deleteUserUseCase: DeleteUserUseCaseInterface) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<User>> {
    try {
      const userId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const deletedUser = await this.deleteUserUseCase.execute(
        userId,
        restaurantId,
      );

      return Response.ok(deletedUser);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
