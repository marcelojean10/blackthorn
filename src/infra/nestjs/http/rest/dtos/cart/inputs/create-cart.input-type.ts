import { ApiProperty } from "@nestjs/swagger";

export class CreateCartInputType {
  @ApiProperty()
  subtotal: number;

  @ApiProperty()
  discounts: number;

  @ApiProperty()
  taxes: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  itemId: string;

  @ApiProperty()
  userId: string;
}
