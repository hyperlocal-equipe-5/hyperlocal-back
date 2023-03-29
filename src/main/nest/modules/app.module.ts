import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app/app.controller';
import { AppService } from '../services/app.service';
import { CategoryModule } from './category.module';
import { IngredientModule } from './ingredient.module';
import { LoginModule } from './login.module';
import { OrderModule } from './order.module';
import { ProductModule } from './product.module';
import { RestaurantModule } from './restaurant.module';
import { ReviewModule } from './review.module';
import { RoleModule } from './role.module';
import { TableModule } from './table.module';
import { UserModule } from './user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from '../interceptors/response-interceptor';
import { PasswordRecoveryModule } from './passwordRecovery.module';
import { ReviewQuestionModule } from './reviewQuestion.module';

@Module({
  imports: [
    CategoryModule,
    IngredientModule,
    LoginModule,
    OrderModule,
    ProductModule,
    RestaurantModule,
    ReviewModule,
    ReviewQuestionModule,
    RoleModule,
    TableModule,
    UserModule,
    PasswordRecoveryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
