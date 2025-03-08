import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.model';
import { RolesService } from 'src/roles/roles.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, RolesService],
  controllers: [UsersController],
})
export class UsersModule {}
