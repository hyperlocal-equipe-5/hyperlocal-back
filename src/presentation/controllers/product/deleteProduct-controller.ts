import { DeleteProductUseCaseInterface } from 'src/data/abstract/usecases/product/deleteProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { DeleteProductInterface } from 'src/presentation/abstract/controllers/product/deleteProductController-interface';
import { Response } from 'src/utils/http/response';

export class DeleteProductController implements DeleteProductInterface {
  private readonly deleteProductUseCase: DeleteProductUseCaseInterface;
  public constructor(deleteProductUseCase: DeleteProductUseCaseInterface) {
    this.deleteProductUseCase = deleteProductUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Product>> {
    try {
      const productId = httpRequest.id;
      const restaurantId = httpRequest.restaurant;
      const deletedProduct = await this.deleteProductUseCase.execute(
        productId,
        restaurantId,
      );

      return Response.ok(deletedProduct);
    } catch (error) {
      return Response.notFound(error.message);
    }
  }
}
