import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewQuestion {
  @ApiProperty()
  question: string;
}
