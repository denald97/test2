import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Category } from 'src/categories/categories.model';
import { BooksService } from './books.service';
import { CategoriesService } from 'src/categories/categories.service';


@Module({
  imports: [TypeOrmModule.forFeature([Book, Category])],
  providers: [BooksService, CategoriesService],
  controllers: [BooksController],
})
export class BooksModule {}
