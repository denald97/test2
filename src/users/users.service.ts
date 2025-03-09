import { Injectable } from '@nestjs/common';
import { AddUserDTO, EditUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.model';
import { Repository } from 'typeorm';
import { RolesService } from 'src/roles/roles.service';
import { UsersRoles } from 'src/roles/roles.model';
 
 @Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UsersRoles)
    private usersRolesRepository: Repository<UsersRoles>,
    private rolesService: RolesService,
  ) {}


  async addUser(data: AddUserDTO) {
    
    const newUser = this.usersRepository.create({
      ...data,
      
    });
    const result = await this.usersRepository.save(newUser);
    return result;
  }

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
  
  
      async editUser(username: string, data: EditUserDTO) {
        const user = await this.getUser(username);
        if (user) {
          const update = await this.usersRepository.update(user, {
            ...data,
          });
          if (update) {
            const editedUser = await this.getUser(username);
            return editedUser;
          }
        }
      }
  
      async banUser(username: string) {
        const user = await this.getUser(username);
        if (user) {
          const update = await this.usersRepository.update(user, { banned: true });
          if (update.affected) {
            return { message: 'Пользователь заблокирован' };
          }
        }
      }
  
      async unbanUser(username: string) {
        const user = await this.getUser(username);
        if (user) {
          const update = await this.usersRepository.update(user, { banned: false });
          if (update.affected) {
            return { message: 'Пользователь разблокирован' };
          }
        }
      }
      
      async addRoleUser(username: string, roles: string) {
        const user = await this.getUser(username);
        const rolesArr = roles.split(',').map((id) => ({ id: Number(id) }));
    
        if (user && rolesArr.length) {
          const rolesFromDb = await Promise.all(
            rolesArr.map(async (userRole) => {
              return await this.rolesService.getRole(userRole.id);
            }),
          );
    
          if (rolesFromDb.length) {
            const result = await Promise.all(
              rolesFromDb.map(async (role) => {
                if (role) {
                  return await this.usersRolesRepository.save({ role, user });
                }
              }),
            );
    
            return { message: 'Роли пользователю добавлены' };
          }
        }
      }
    
  }