import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({
    description: 'ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'denis123',
  })
  @Column()
  username: string;

  @ApiProperty({
    description: 'ФИО пользователя',
    example: 'Иванов Иван Иванович',
  })
  @Column()
  fullname: string;

  @ApiProperty({
    description: 'Электронная почта пользователя',
    example: 'i.i.ivanov@example.com',
  })
  @Column()
  email: string;

  @ApiProperty({
    description: 'День рождения пользователя',
    example: '08.03.2000',
  })
  @Column()
  birthday: Date;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'mytopstrongpassword',
  })
  @Column()
  password: string;

  @ApiProperty({
    description: 'Забанен ли пользователь?',
    example: true,
  })
  @Column({ nullable: true, default: false })
  banned?: boolean;
}
