import { ApiProperty } from '@nestjs/swagger';

export class RequestRecovery {
  @ApiProperty()
  email: string;
}
