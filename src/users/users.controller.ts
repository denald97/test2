import { Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put, 
    UseGuards } from '@nestjs/common';
 import { UsersService } from './users.service';
 import { EditUserDTO } from './dto/create-user.dto';
 import { AuthGuard } from 'src/guards/auth.guards';
 import { HasRoles } from 'src/decorators/roles.decorator';
 import { Role } from 'src/const/roles.enum';
 import { RolesGuard } from 'src/guards/roles.guards';
 
 @Controller('users')
 export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @UseGuards(AuthGuard, RolesGuard)
    @HasRoles(Role.Admin)
    @Get('')
    async getUsers() {
      return await this.usersService.getUsers();
    }
  
    @Get(':username')
   async getUser(@Param() params: { username: string }) {
     return await this.usersService.getUser(params.username);
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
 }