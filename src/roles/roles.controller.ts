import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  import { CreateRoleDTO, EditRoleDTO } from './dto/roles.dto';

 import { RolesService } from './roles.service';
 
 @Controller('roles')
 export class RolesController {
    constructor(private readonly rolesService: RolesService) {}
  
    @Get('')
    async getRoles() {
      return await this.rolesService.getRoles();
    }
  
    @Post('')
    async createRole(@Body() body: CreateRoleDTO) {
        return await this.rolesService.createRole(body);
      }
  
    @Get(':id')
    async getRole(@Param() params: { id: number }) {
        return await this.rolesService.getRole(params.id);
      }
    @Put(':id')
    async editRole(@Param() params: { id: number }, @Body() body: EditRoleDTO) {
        return await this.rolesService.editRole(params.id, body);
      }
  
    @Delete(':id')
    async deleteRole(@Param() params: { id: string }) {
        return await this.rolesService.deleteRole(params.id);
      }
  }