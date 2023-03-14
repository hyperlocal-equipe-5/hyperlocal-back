import { ApiProperty } from "@nestjs/swagger";

export class CreateRestaurant {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  telephone?: number;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  logo?: string;

  @ApiProperty()
  colorScheme?: number;
};
