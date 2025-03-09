import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.model';
import { RolesService } from 'src/roles/roles.service';
import { Role, UsersRoles } from 'src/roles/roles.model';

@Module({
    imports: [TypeOrmModule.forFeature([User, Role, UsersRoles])],
  providers: [UsersService, RolesService],
  controllers: [UsersController],
})
export class UsersModule {}
