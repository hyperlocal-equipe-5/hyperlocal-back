import { ApiProperty } from "@nestjs/swagger";

export class CreateProduct {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price?: number;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  highlight?: boolean;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  ingredients?: string[];

  @ApiProperty()
  category?: string;

  @ApiProperty()
  restaurant: string;
};
