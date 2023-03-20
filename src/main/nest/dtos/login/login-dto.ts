import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({
    example: 'admin@admin.com'
  })
  email: string;

  @ApiProperty({
    example: '1234567'
  })
  password: string;
};
