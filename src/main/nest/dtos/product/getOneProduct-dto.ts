import { ApiProperty } from "@nestjs/swagger"

export class GetOneProduct {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
