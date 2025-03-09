import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'categories' })
export class Category {
  @ApiProperty({
    description: 'ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Название категории',
    example: 'Драма',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Описание категории',
    example: 'Категория всякого разного',
  })
  @Column({ nullable: true })
  description?: string;
}
