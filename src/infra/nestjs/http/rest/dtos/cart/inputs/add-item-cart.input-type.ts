import { ApiProperty } from "@nestjs/swagger";

export class AddItemCartInputType {
  @ApiProperty()
  id: string;

  @ApiProperty()
  itemId: string;
}
