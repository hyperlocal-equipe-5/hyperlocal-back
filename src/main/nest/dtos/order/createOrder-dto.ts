import { ApiProperty } from "@nestjs/swagger";

export class CreateOrder {
  @ApiProperty()
  products: string[];

  @ApiProperty()
  quantities: number[];

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

  @ApiProperty()
  restaurant: string;
};
