import { ApiProperty } from "@nestjs/swagger";

export class UpdateReview {
  @ApiProperty()
  id: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  stars?: number;

  @ApiProperty()
  comment?: string;

  @ApiProperty()
  user?: string;
};
