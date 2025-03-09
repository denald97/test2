import { Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put, Query } from '@nestjs/common';
 import { UsersService } from './users.service';
 import { EditUserDTO, AddUserDTO } from './dto/create-user.dto';
 
 
 @Controller('users')
 export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  

    @Get('')
    async getUsers() {
      return await this.usersService.getUsers();
    }
  
    @Get(':username')
   async getUser(@Param() params: { username: string }) {
     return await this.usersService.getUser(params.username);
   }

   @Post('')
     async addUser(@Body() body: AddUserDTO) {
       return await this.usersService.addUser(body);
     }
  
   @Put(':username')
   async editUser(
     @Param() params: { username: string },
     @Body() body: EditUserDTO,
   ) {
     return await this.usersService.editUser(params.username, body);
   }
  
   @Post(':username/ban')
   async banUser(@Param() params: { username: string }) {
     return await this.usersService.banUser(params.username);
   }
  
   @Delete(':username/ban')
   async unbanUser(@Param() params: { username: string }) {
     return await this.usersService.unbanUser(params.username);
   }

   @Post(':username/roles')
  async addRoleUser(
    @Param() params: { username: string },
    @Query('id') roles: string,
  ) {
    return await this.usersService.addRoleUser(params.username, roles);
  }
 }