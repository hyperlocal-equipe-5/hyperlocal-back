import { ApiProperty } from "@nestjs/swagger"

export class GetAllReviews {
  @ApiProperty()
  restaurant: string
}
