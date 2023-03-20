import { ApiProperty } from "@nestjs/swagger"

export class GetAllOrders {
  @ApiProperty()
  restaurant: string
}
