import { Injectable } from '@nestjs/common';
import { EditUserDTO } from './dto/create-user.dto';
 
 @Injectable()
export class UsersService {
    async getUsers() {}
  
    async getUser(username: string) {}
  
    async editUser(username: string, data: EditUserDTO) {}
  
    async banUser(username: string) {}
  
    async unbanUser(username: string) {}
  }