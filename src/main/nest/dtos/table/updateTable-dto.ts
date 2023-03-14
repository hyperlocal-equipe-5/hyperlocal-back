import { ApiProperty } from "@nestjs/swagger";

export class UpdateTable {
  @ApiProperty()
  id: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  number?: number;
};
