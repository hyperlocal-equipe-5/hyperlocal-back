import { ApiProperty } from "@nestjs/swagger";

export class  UpdateCategory {
  @ApiProperty()
  id: string;

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  highlight?: boolean;

  @ApiProperty()
  image?: string;
};
