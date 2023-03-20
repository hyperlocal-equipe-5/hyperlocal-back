import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrder {
  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  products?: string[];

  @ApiProperty()
  quantities?: number[];

  @ApiProperty()
  takeAway?: boolean;

  @ApiProperty()
  customerName?: string;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  table?: string;
};
