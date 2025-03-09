import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/categories.model';

@Entity({ name: 'books' })
export class User {
  @ApiProperty({
    description: 'ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Имя книги',
    example: 'Война и мир',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'ФИО автора',
    example: 'А.С. Пушкин',
  })
  @Column()
  author: string;

  @ApiProperty({
    description: 'Год',
    example: '2020',
  })
  @Column()
  date: number;

  @ApiProperty({
    description: 'Возрастное ограничение',
    example: '18',
  })
  @Column()
  age: number;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn()
  category: Category;
  
}
