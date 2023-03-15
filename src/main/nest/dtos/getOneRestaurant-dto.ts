import { ApiProperty } from "@nestjs/swagger"

export class GetOneRestaurant {
  @ApiProperty()
  restaurant: string
}
