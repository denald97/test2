import { Get, Param, Controller, Body, Post, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { AddBookDTO, ChangeCategoryBookDTO, EditBookDTO } from './dto/books.dto';



@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    //получение всех книг
    @Get('')
  async getBooks() {
    return await this.booksService.getBooks();
  }
  //получение книг по ID категории
  @Get('byCategory/:id')
  async getBooksByCategory(@Param() params: { id: number }) {
    return await this.booksService.getBooksByCategory(params.id);
  }
  //получение книги по ID
  @Get(':id')
  async getBook(@Param() params: { id: number }) {
    return await this.booksService.getBook(params.id);
  }

  //создание книги
  @Post('')
  async createBook(@Body() body: AddBookDTO) {
    return await this.booksService.createBook(body);
  }

  //изменение книги
  @Put(':id')
  async editBook(@Param() params: { id: number }, @Body() body: EditBookDTO) {
    return await this.booksService.editBook(params.id, body);
  }

  //удаление книги
  @Delete(':id')
  async deleteBook(@Param() params: { id: number }) {
    return await this.booksService.deleteBook(params.id);
  }

  //изменение категории книги
  @Post(':id/category')
  async changeCategory(
    @Param() params: { id: number },
    @Body() body: ChangeCategoryBookDTO,
  ) {
    return await this.booksService.changeCategory(params.id, body);
  }

}
