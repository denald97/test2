import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './categories.model';
import { Repository } from 'typeorm';
import { AddCategoryDTO, EditCategoryDTO } from './dto/categories.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
      ) {}
    
      async getCategories() {
        const categories = await this.categoriesRepository.find();
        return categories;
      }
    
      async getCategory(id: number) {
        const category = await this.categoriesRepository.findOne({ where: { id } });
        return category;
      }
    
      async createCategory(data: AddCategoryDTO) {
        const newCategory = this.categoriesRepository.create(data);
        const created = await this.categoriesRepository.save(newCategory);
        return created;
      }
    
      async editCategory(id: number, data: EditCategoryDTO) {
        const updated = await this.categoriesRepository.update(id, data);
        if (updated) {
          return { message: 'Категория изменена' };
        }
      }
    
      async deleteCategory(id: number) {
          const deleted = await this.categoriesRepository.delete(id);
          if (deleted) {
            return { message: 'Категория удалена' };
          }
        } 
      
    }

