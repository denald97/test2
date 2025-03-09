import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  } from 'typeorm';
  import { ApiProperty } from '@nestjs/swagger';
  import { User } from 'src/users/users.model';
  
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

  }

  @Entity('users_roles')
export class UsersRoles {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn()
  role: Role;
}