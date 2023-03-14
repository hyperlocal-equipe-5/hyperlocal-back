import { ApiProperty } from "@nestjs/swagger";

export class CreateTable {
  @ApiProperty()
  number: number;

  @ApiProperty()
  restaurant: string;
};
