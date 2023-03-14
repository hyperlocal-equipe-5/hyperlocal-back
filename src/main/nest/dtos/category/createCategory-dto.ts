import { ApiProperty } from "@nestjs/swagger";

export class CreateCategory {
  @ApiProperty()
  name: string;

  @ApiProperty()
  highlight?: boolean;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  restaurant: string;
};
