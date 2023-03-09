import { Module } from '@nestjs/common';
import { makeCreateProductFactory } from 'src/main/factories/product/createProduct-factory';
import { makeDeleteProductFactory } from 'src/main/factories/product/deleteProduct-factory';
import { makeGetAllProductFactory } from 'src/main/factories/product/getAllProducts-factory';
import { makeGetOneProductFactory } from 'src/main/factories/product/getOneProduct-factory';
import { makeUpdateProductFactory } from 'src/main/factories/product/updateProduct-factory';
import { CreateProductController } from 'src/presentation/controllers/product/createProduct-controller';
import { DeleteProductController } from 'src/presentation/controllers/product/deleteProduct-controller';
import { GetAllProductsController } from 'src/presentation/controllers/product/getAllProducts-controller';
import { GetOneProductController } from 'src/presentation/controllers/product/getOneProduct-controller';
import { UpdateProductController } from 'src/presentation/controllers/product/updateProduct-controller';
import { ProductController } from '../controllers/product.controller';
import { ProductControllerAdmin } from '../controllers/product.controller.admin';

@Module({
  controllers: [ProductController, ProductControllerAdmin],
  providers: [
    {
      provide: CreateProductController,
      useFactory: makeCreateProductFactory,
    },
    {
      provide: DeleteProductController,
      useFactory: makeDeleteProductFactory,
    },
    {
      provide: UpdateProductController,
      useFactory: makeUpdateProductFactory,
    },
    {
      provide: GetAllProductsController,
      useFactory: makeGetAllProductFactory,
    },
    {
      provide: GetOneProductController,
      useFactory: makeGetOneProductFactory,
    },
  ],
})
export class ProductModule {}
