import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
 import { TypeOrmModule } from '@nestjs/typeorm';
 import { User } from 'src/users/users.model';
 import { JwtModule } from '@nestjs/jwt';
 import { AuthService } from './auth.service';
 import { AuthController } from './auth.controller';
 import { Role, UsersRoles } from 'src/roles/roles.model';
import { RolesService } from 'src/roles/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, UsersRoles])],
  providers: [AuthService, UsersService, RolesService],
  controllers: [AuthController],
    })
export class AuthModule {}
