import { Injectable } from '@nestjs/common';
import { IntrospectAuthDTO, LoginAuthDTO, SignupAuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
    async login(data: LoginAuthDTO) {}
  
    async signup(data: SignupAuthDTO) {}
  
    async introspect(data: IntrospectAuthDTO) {}
  }
