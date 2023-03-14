import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  cellphone?: number;

  @ApiProperty()
  role?: string;

  @ApiProperty()
  restaurant: string;
};
