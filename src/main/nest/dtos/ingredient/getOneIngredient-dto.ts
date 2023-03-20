import { ApiProperty } from "@nestjs/swagger"

export class GetOneIngredient {
  @ApiProperty()
  id: string

  @ApiProperty()
  restaurant: string
}
