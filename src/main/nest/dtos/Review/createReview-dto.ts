import { ApiProperty } from "@nestjs/swagger";

export class CreateReview {
  @ApiProperty()
  stars: number;

  @ApiProperty()
  comment?: string;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  restaurant: string;
};
