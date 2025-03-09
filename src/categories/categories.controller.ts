import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { AddCategoryDTO, EditCategoryDTO } from './dto/categories.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get('')
  async getCategories() {
    return await this.categoriesService.getCategories();
  }

  @Post('')
  async createCategory(@Body() body: AddCategoryDTO) {
    return await this.categoriesService.createCategory(body);
  }

  @Put(':id')
  async editCategory(
    @Param() params: { id: number },
    @Body() body: EditCategoryDTO,
  ) {
    return await this.categoriesService.editCategory(params.id, body);
  }

  @Delete(':id')
  async deleteCategory(@Param() params: { id: number }) {
    return await this.categoriesService.deleteCategory(params.id);
  }
}
