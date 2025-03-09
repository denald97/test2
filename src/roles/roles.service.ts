import { Injectable } from '@nestjs/common';
import { CreateRoleDTO, EditRoleDTO } from './dto/roles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './roles.model';
import { Repository } from 'typeorm';
import { UsersRoles } from './roles.model';
import { User } from 'src/users/users.model';


@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
    @InjectRepository(UsersRoles)
    private userRolesRepository: Repository<UsersRoles>,
  ) {}

  async getRoles() {
    const roles = await this.rolesRepository.find();
    return roles;
  }

  async getRole(id: number) {
    const role = await this.rolesRepository.findOne({  });
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.rolesRepository.findOne({ where: { value } });
    return role;
  }

  async createRole(data: CreateRoleDTO) {
    const role = this.rolesRepository.create(data);
    const result = await this.rolesRepository.save(role);
    return result;
  }

  async editRole(id: number, data: EditRoleDTO) {
    const update = await this.rolesRepository.update(id, data);
    if (update) {
      const role = await this.getRole(id);
      return role;
    }
  }

  async deleteRole(id: string) {
    const result = await this.rolesRepository.delete(id);
    return result;
  }

  async createUserRole(user: User, role: Role) {
    const userRole = this.userRolesRepository.create({ user, role });
    const result = await this.userRolesRepository.save(userRole);
    return result;
  }

  }
