import { ApiProperty } from "@nestjs/swagger";

export class  UpdateCategory {
  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  highlight?: boolean;

  @ApiProperty()
  image?: string;
};
