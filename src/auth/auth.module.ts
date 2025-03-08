import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
 import { TypeOrmModule } from '@nestjs/typeorm';
 import { User } from 'src/users/users.model';
 import { JwtModule } from '@nestjs/jwt';
 import { AuthService } from './auth.service';
 import { AuthController } from './auth.controller';

@Module({
    imports: [
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET || 'very...',
          signOptions: { expiresIn: '15m' },
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [AuthService, UsersService],
      controllers: [AuthController],
    })
export class AuthModule {}
