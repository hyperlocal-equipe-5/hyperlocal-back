import { ApiProperty } from "@nestjs/swagger"

export class GetOneRole {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
