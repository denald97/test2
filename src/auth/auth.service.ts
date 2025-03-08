import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
  } from '@nestjs/common';
  import * as bcrypt from 'bcrypt';
  import { IntrospectAuthDTO, LoginAuthDTO, SignupAuthDTO } from './dto/auth.dto';
  import { UsersService } from 'src/users/users.service';
  import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
      ) {}
      async login(data: LoginAuthDTO) {
        const user = await this.usersService.getUser(data.username);
        if (!user) {
          throw new UnauthorizedException('Пользователь не найден');
        }
    
        // Сравнимаем пароль с хэшированным в БД
        const isPasswordMatch = await bcrypt.compare(data.password, user.password);
        if (!isPasswordMatch) {
          throw new UnauthorizedException('Неверный пароль');
        }
    
        const payload = { sub: user.username };
        const access_token = await this.jwtService.signAsync(payload);
    
        return {
          access_token,
        };
      }
    
      async signup(data: SignupAuthDTO) {
        const isUserMatch = await this.usersService.getUser(data.username);
        if (isUserMatch) {
          throw new BadRequestException(
            'Пользователь с таким именем пользователя уже существует',
          );
        }
    
        // Хэшируем пароль, используя "соль", чтобы не хранить в открытом виде в БД
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(data.password, salt);
    
        const newUser = await this.usersService.addUser({
          ...data,
          password: hashPassword,
        });
        if (newUser) {
          const payload = { sub: newUser.username };
          const access_token = await this.jwtService.signAsync(payload);
    
          return {
            access_token,
          };
        }
      }
    
    async introspect(data: IntrospectAuthDTO) {}
  }
