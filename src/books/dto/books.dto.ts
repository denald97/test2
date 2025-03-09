import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class BaseBookDTO {
  
  title: string;
  author: string;
  date: number;
  age: number;
}

export class AddBookDTO extends BaseBookDTO {}

export class EditBookDTO extends BaseBookDTO {}

export class ChangeCategoryBookDTO {
    
    @IsNotEmpty({ message: 'ID категории обязательна' })
    categoryId: number;
  }