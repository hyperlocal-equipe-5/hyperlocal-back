import { ApiProperty } from "@nestjs/swagger"

export class GetOneCategory {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
