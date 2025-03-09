import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category} from './categories.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
