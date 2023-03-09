import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
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

@Module({
  imports: [
    CategoryModule,
    IngredientModule,
    LoginModule,
    OrderModule,
    ProductModule,
    RestaurantModule,
    ReviewModule,
    RoleModule,
    TableModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
