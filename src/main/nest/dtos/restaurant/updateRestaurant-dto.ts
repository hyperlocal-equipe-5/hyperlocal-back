import { ApiProperty } from "@nestjs/swagger";

export class UpdateRestaurant {
  @ApiProperty()
  telephone?: number;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  logo?: string;

  @ApiProperty()
  colorScheme?: number;
};
