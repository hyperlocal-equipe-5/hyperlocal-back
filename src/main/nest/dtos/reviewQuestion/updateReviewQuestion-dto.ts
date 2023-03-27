import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewQuestion {
  @ApiProperty()
  question: string;
}
