import { ApiProperty } from "@nestjs/swagger"

export class GetOneUser {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
