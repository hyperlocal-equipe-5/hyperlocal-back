import { GetOneUserUseCaseInterface } from 'src/data/abstract/usecases/user/getOneUserUseCase-interface';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetOneUserControllerInterface } from 'src/presentation/abstract/controllers/user/getOneUserController-interface';
import { Response } from 'src/utils/http/response';

export class GetOneUserController implements GetOneUserControllerInterface {
  private readonly getOneUserUseCase: GetOneUserUseCaseInterface;

  public constructor(getOneUserUsecase: GetOneUserUseCaseInterface) {
    this.getOneUserUseCase = getOneUserUsecase;
  }

  public async execute(httpRequest: HttpRequest): Promise<HttpResponse<User>> {
    try {
      const userId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;

      if (!userId) {
        return Response.badRequest('Missing entity id.');
      }

      const user = await this.getOneUserUseCase.execute(userId, restaurantId);

      return Response.ok(user);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
