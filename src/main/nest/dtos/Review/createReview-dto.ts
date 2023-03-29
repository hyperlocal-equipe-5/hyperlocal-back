import { ApiProperty } from '@nestjs/swagger';

export class CreateReview {
  @ApiProperty({
    type: [Object],
    description: 'Array of responses related to the review questions provided.',
    example: [
      {
        id: 'e3zue98238md32',
        question: '12d21d14f134f',
        answer: 'The food was very good.',
        stars: 5,
      },
    ],
  })
  responses: {
    id: string;
    question: string;
    answer: string;
    stars: number;
  }[];

  @ApiProperty()
  restaurant: string;

  @ApiProperty()
  user?: string;
}
