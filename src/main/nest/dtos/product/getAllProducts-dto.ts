import { ApiProperty } from "@nestjs/swagger"

export class GetAllProducts {
  @ApiProperty()
  restaurant: string
}
