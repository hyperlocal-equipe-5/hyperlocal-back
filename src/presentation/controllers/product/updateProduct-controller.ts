import { UpdateProductUseCaseInterface } from 'src/data/abstract/usecases/product/updateProductUseCase-interface';
import { Product } from 'src/domain/entities/product';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { HttpResponse } from 'src/domain/http/httpResponse';
import { UpdateProductInterface } from 'src/presentation/abstract/controllers/product/updateProductController-interface';
import { Response } from 'src/utils/http/response';

export class UpdateProductController implements UpdateProductInterface {
  private readonly updateProductUseCase: UpdateProductUseCaseInterface;
  public constructor(updateProductUseCase: UpdateProductUseCaseInterface) {
    this.updateProductUseCase = updateProductUseCase;
  }

  public async execute(
    httpRequest: HttpRequest,
  ): Promise<HttpResponse<Product>> {
    try {
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
