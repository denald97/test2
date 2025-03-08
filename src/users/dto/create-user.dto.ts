import { ApiProperty } from '@nestjs/swagger';

export class BaseUserDTO {
    
      email: string;
      fullname: string;
    }
    
    export class EditUserDTO extends BaseUserDTO {}