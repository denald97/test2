import { ApiProperty } from '@nestjs/swagger';
 import { IsEmail, IsNotEmpty } from 'class-validator';
 
 class BaseAuthDTO {
   @ApiProperty({
     description: 'Имя пользователя',
     example: 'topivan3000',
   })
   @IsNotEmpty({ message: 'Имя пользователя обязательно' })
   username: string;
 
   @ApiProperty({
     description: 'Пароль пользователя',
     example: 'mytopstrongpassword',
   })
   @IsNotEmpty({ message: 'Пароль пользователя обязателен' })
   password: string;
 }
 
 export class LoginAuthDTO extends BaseAuthDTO {}
 
 export class SignupAuthDTO extends BaseAuthDTO {
   @ApiProperty({
     description: 'Электронная почта пользователя',
     example: 'i.i.ivanov@example.com',
   })
   @IsEmail()
   @IsNotEmpty({ message: 'Электронная почта пользователя обязательна' })
   email: string;
 
   @ApiProperty({
     description: 'ФИО пользователя',
     example: 'Иванов Иван Иванович',
   })
   @IsNotEmpty({ message: 'ФИО пользователя обязательны' })
   fullname: string;
 }
 
 export class IntrospectAuthDTO {
   @ApiProperty({
     description: 'Токен',
     example: 'jwt.access.token',
   })
   @IsNotEmpty({ message: 'Токен обязателен' })
   token: string;
 }