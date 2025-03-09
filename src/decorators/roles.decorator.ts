import { SetMetadata } from '@nestjs/common';
 import { Role } from 'src/const/roles.enum';
 
 export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);