import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoginMiddleware } from '../middlewares/login.middleware';
import { makeCreateCategoryFactory } from 'src/main/factories/category/createCategory-factory';
import { makeDeleteCategoryFactory } from 'src/main/factories/category/deleteCategory-factory';
import { makeGetAllCategoryFactory } from 'src/main/factories/category/getAllCategories-factory';
import { makeGetOneCategoryFactory } from 'src/main/factories/category/getOneCategory-factory';
import { makeUpdateCategoryFactory } from 'src/main/factories/category/updateCategory-factory';
import { CreateCategoryController } from 'src/presentation/controllers/category/createCategory-controller';
import { DeleteCategoryController } from 'src/presentation/controllers/category/deleteCategory-controller';
import { GetAllCategoriesController } from 'src/presentation/controllers/category/getAllCategories-controller';
import { GetOneCategoryController } from 'src/presentation/controllers/category/getOneCategory-controller';
import { UpdateCategoryController } from 'src/presentation/controllers/category/updateCategory-controller';
import { CategoryController } from '../controllers/category/category.controller';
import { CategoryControllerAdmin } from '../controllers/category/category.controller.admin';

@Module({
  controllers: [CategoryController, CategoryControllerAdmin],
  providers: [
    {
      provide: CreateCategoryController,
      useFactory: makeCreateCategoryFactory,
    },
    {
      provide: DeleteCategoryController,
      useFactory: makeDeleteCategoryFactory,
    },
    {
      provide: UpdateCategoryController,
      useFactory: makeUpdateCategoryFactory,
    },
    {
      provide: GetAllCategoriesController,
      useFactory: makeGetAllCategoryFactory,
    },
    {
      provide: GetOneCategoryController,
      useFactory: makeGetOneCategoryFactory,
    },
  ],
})
export class CategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes('/admin');
  }
}
