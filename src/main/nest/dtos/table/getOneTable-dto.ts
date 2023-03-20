import { ApiProperty } from "@nestjs/swagger"

export class GetOneTable {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
