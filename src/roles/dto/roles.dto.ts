import { ApiProperty } from '@nestjs/swagger';
 import { IsNotEmpty } from 'class-validator';
 
 class BaseRoleDTO {
   @ApiProperty({
     description: 'Роль',
     example: 'USER',
   })
   @IsNotEmpty({ message: 'Роль обязательна' })
   value: string;
 
   @ApiProperty({
     description: 'Название роли',
     example: 'Пользователь',
   })
   @IsNotEmpty({ message: 'Название роли обязательно' })
   name: string;
 }
 
 export class CreateRoleDTO extends BaseRoleDTO {}
 
 export class EditRoleDTO extends BaseRoleDTO {}