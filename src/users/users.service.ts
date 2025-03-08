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

      async getUsers() {}

      async getUser(username: string) {
        const user = await this.usersRepository.findOne({ where: { username } });
        return user;
      }
  
  
    async editUser(username: string, data: EditUserDTO) {}
  
    async banUser(username: string) {}
  
    async unbanUser(username: string) {}

    async addUser(data: AddUserDTO) {
        const newUser = this.usersRepository.create(data);
        const result = await this.usersRepository.save(newUser);
        return result;
      }
  }