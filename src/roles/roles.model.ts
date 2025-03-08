import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
  
  @Entity({ name: 'roles' })
  export class Role {
    @ApiProperty({
      description: 'ID',
      example: '39efb24e-ffeb-4a2b-8d29-7c62c605441d',
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ApiProperty({
      description: 'Роль',
      example: 'USER',
    })
    @Column()
    value: string;
  
    @ApiProperty({
      description: 'Название роли',
      example: 'Пользователь',
    })
    @Column()
    name: string;
  
    @CreateDateColumn({ nullable: true })
    createdAt?: Date;
  
    @UpdateDateColumn({ nullable: true })
    updatedAt?: Date;
  }