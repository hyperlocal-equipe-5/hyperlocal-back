import { ApiProperty } from "@nestjs/swagger";

export class CreateIngredient {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price?: number;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  quantity?: number;

  @ApiProperty()
  restaurant: string;
};
