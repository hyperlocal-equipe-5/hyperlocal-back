import { ApiProperty } from "@nestjs/swagger"

export class GetAllCategories {
  @ApiProperty()
  restaurant: string
}
