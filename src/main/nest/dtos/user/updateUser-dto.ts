import { ApiProperty } from "@nestjs/swagger";

export class UpdateUser  {

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  cellphone?: number;

  @ApiProperty()
  role?: string;
}
