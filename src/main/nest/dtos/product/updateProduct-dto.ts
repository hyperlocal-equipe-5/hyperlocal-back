import { ApiProperty } from "@nestjs/swagger";

export class UpdateProduct {
  @ApiProperty()
  id: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  highlight: boolean;

  @ApiProperty()
  image: string;

  @ApiProperty()
  ingredients: string[];

  @ApiProperty()
  category: string;
};
