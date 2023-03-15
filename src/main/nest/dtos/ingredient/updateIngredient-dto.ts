import { ApiProperty } from "@nestjs/swagger";

export class UpdateIngredient {
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
