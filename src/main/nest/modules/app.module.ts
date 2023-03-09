import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CategoryModule } from './category.module';

@Module({
  imports: [CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
