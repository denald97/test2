import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { AddBookDTO, EditBookDTO } from './dto/books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    private categoriesService: CategoriesService,
  ) {}

  async getBooks() {
    const categories = await this.booksRepository.find();
    return categories;
  }

  /*async getBooksByCategory(id: number) {
    const category = await this.categoriesService.getCategory(id);
    console.log(category);
    if (category) {
      const items = await this.booksRepository.find({ where: { category } });
      return items;
    }
  }*/

  async getBook(id: number) {
    const category = await this.booksRepository.findOne({ where: { id } });
    return category;
  }

  async createBook(data: AddBookDTO) {
    const newCategory = this.booksRepository.create(data);
    const created = await this.booksRepository.save(newCategory);
    return created;
  }

  async editBook(id: number, data: EditBookDTO) {
    const updated = await this.booksRepository.update(id, data);
    if (updated) {
      return { message: 'Книга изменена' };
    }
  }

  async deleteBook(id: number) {
    const deleted = await this.booksRepository.delete(id);
    if (deleted) {
      return { message: 'Книга удалена' };
    }
  }

  /*async changeCategory(id: number, data: ChangeCategoryItemDTO) {
    const category = await this.categoriesService.getCategory(data.categoryId);
    if (category) {
      const updated = await this.booksRepository.update(id, { category });
      if (updated) {
        return { message: 'Категория книги изменена' };
      }
    }
  }*/
}