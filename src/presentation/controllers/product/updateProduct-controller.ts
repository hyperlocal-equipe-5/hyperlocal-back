import { UpdateProductUseCaseInterface } from 'src/data/abstract/usecases/product/updateProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { User } from 'src/domain/entities/user';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateProductInterface } from 'src/presentation/abstract/controllers/product/updateProductController-interface';
import { Response } from 'src/utils/http/response';
import { UserPermissionValidator } from 'src/utils/validators/userPermission-validator';

export class UpdateProductController implements UpdateProductInterface {
  private readonly updateProductUseCase: UpdateProductUseCaseInterface;

  public constructor(updateProductUseCase: UpdateProductUseCaseInterface) {
    this.updateProductUseCase = updateProductUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Product>> {
    try {
      const loggedUser: User = httpRequest.body.loggedUser;
      if (!UserPermissionValidator.validate(loggedUser, 'updateProducts')) {
        return Response.unauthorized(
          'This user has no permition to perform this action.',
        );
      }

      const updateProductDto = httpRequest.body;
      const updatedProduct = await this.updateProductUseCase.execute(
        updateProductDto,
      );

      return Response.ok(updatedProduct);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
