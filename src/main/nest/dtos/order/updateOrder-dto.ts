import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrder {
  @ApiProperty()
  id: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  products?: string[];

  @ApiProperty()
  quantities?: number[];

  @ApiProperty()
  takeAway?: boolean;

  @ApiProperty()
  orderNumber?: number;

  @ApiProperty()
  customerName?: string;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  table?: string;
};
