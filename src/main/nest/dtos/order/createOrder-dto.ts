import { ApiProperty } from '@nestjs/swagger';

export class CreateOrder {
  @ApiProperty({
    type: [Object],
    description: 'Array of products added to the order',
    example: [
      {
        product: '2612e1te73tdg273',
        ingredientsAdded: [{ ingredient: '434f3f34fq4f', quantity: 2 }],
        ingredientsRemoved: [],
      },
    ],
  })
  products: {
    product: string;
    ingredientsAdded: {
      ingredient: string;
      quantity: number;
    }[];
    ingredientsRemoved: {
      ingredient: string;
      quantity: number;
    }[];
  }[];

  @ApiProperty()
  finished: boolean;

  @ApiProperty()
  takeAway?: boolean;

  @ApiProperty()
  customerName?: string;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  table?: string;

  @ApiProperty()
  restaurant: string;
}
