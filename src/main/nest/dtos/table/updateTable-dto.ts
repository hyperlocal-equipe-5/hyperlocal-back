import { ApiProperty } from "@nestjs/swagger";

export class UpdateTable {
  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  number?: number;
};
