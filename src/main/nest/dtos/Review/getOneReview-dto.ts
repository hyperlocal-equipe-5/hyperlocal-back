import { ApiProperty } from "@nestjs/swagger"

export class GetOneReview {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
