import { GetAllOrdersUseCaseInterface } from 'src/data/abstract/usecases/order/getAllOrdersUseCase-interface';
import { Order } from 'src/domain/entities/order';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { GetAllOrdersInterface } from 'src/presentation/abstract/controllers/order/getAllOrdersController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class GetAllOrdersController implements GetAllOrdersInterface {
  private readonly createdOrderUserCase: GetAllOrdersUseCaseInterface;

  public constructor(createdOrderUserCase: GetAllOrdersUseCaseInterface) {
    this.createdOrderUserCase = createdOrderUserCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Order[]>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (UserPermissionValidator.validate(loggedUser, 'readOrders')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const restaurantId = httpRequest.restaurant;
      const allOrders = await this.createdOrderUserCase.execute(restaurantId);
      return Response.ok(allOrders);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
