import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class BaseCategoryDTO {
 
  @IsNotEmpty({ message: 'Название категории обязательно' })
  name: string;

  description?: string;
}

export class EditCategoryDTO extends BaseCategoryDTO {}

export class AddCategoryDTO extends BaseCategoryDTO {}