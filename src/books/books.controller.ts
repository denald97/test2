import { Get, Param, Controller } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) {}

    //получение всех книг
    @Get('')
  async getBooks() {
    return await this.bookService.getBooks();
  }
  //получение книг по ID категории
  /*@Get('byCategory/:id')
  async getBooksByCategory(@Param() params: { id: number }) {
    return await this.bookService.getBooksByCategory(params.id);
  }*/

  @Get(':id')
  async getBook(@Param() params: { id: number }) {
    return await this.bookService.getBook(params.id);
  }



}
