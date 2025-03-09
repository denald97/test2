import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class BaseBookDTO {
  
  title: string;
  author: string;
  price: number;
  date: number;
  age: number;
}

export class AddBookDTO extends BaseBookDTO {}

export class EditBookDTO extends BaseBookDTO {}