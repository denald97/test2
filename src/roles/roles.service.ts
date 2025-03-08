import { Injectable } from '@nestjs/common';
import { CreateRoleDTO, EditRoleDTO } from './dto/roles.dto';

@Injectable()
export class RolesService {
    async getRoles() {}
  
    async createRole(data: CreateRoleDTO) {}
  
    async getRole() {id: string}
  
    async editRole() {id: string, data: EditRoleDTO}
  
    async deleteRole() {id: string}
  }
