import { ApiProperty } from "@nestjs/swagger"

export class GetOneOrder {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
