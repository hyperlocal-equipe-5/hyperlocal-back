import { ApiProperty } from "@nestjs/swagger"

export class GetAllIngredients {
  @ApiProperty()
  restaurant: string
}
