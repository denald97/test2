import { Body, Controller, Post } from '@nestjs/common';
 import { AuthService } from './auth.service';
 import { IntrospectAuthDTO, LoginAuthDTO, SignupAuthDTO } from './dto/auth.dto';
 
 @Controller('auth')
 export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('/login')
    async login(@Body() body: LoginAuthDTO) {
        return await this.authService.login(body);
      }
  
    @Post('/signup')
    async signup(@Body() body: SignupAuthDTO) {
        return await this.authService.signup(body);
      }
  
    @Post('/introspect')
    async introspect(@Body() body: IntrospectAuthDTO) {
        return await this.authService.introspect(body);
      }
  }