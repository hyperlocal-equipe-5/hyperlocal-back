import { ApiProperty } from "@nestjs/swagger";

export class UpdateIngredient {
  @ApiProperty()
  id: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  price?: number;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  quantity?: number;
};
