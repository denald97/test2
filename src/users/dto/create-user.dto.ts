import { SignupAuthDTO } from 'src/auth/dto/auth.dto';

export class BaseUserDTO {
    
      email: string;
      fullname: string;
    }
    
export class EditUserDTO extends BaseUserDTO {}

export class AddUserDTO extends SignupAuthDTO {}