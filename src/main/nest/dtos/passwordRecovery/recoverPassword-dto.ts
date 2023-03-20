import { ApiProperty } from '@nestjs/swagger';

export class RecoverPassword {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  token: string;
}
