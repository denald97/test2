import { Injectable } from '@nestjs/common';
import { AddUserDTO, EditUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.model';
import { Repository } from 'typeorm';
 
 @Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

      async getUsers() {
        const users = await this.usersRepository.find();
 
        const result = users.map((user) => {
          const { password, ...data } = user;
          return data;
        });
    
        return result;
      }

      async getUser(username: string, withPassword?: boolean) {
        const user = await this.usersRepository.findOne({ where: { username } });
    
        if (user && !withPassword) {
          // @ts-ignore
          delete user["password"];
        }
    
        return user;
      }
  
  
    async editUser(username: string, data: EditUserDTO) {}
  
    async banUser(username: string) {}
  
    async unbanUser(username: string) {}

    
  }