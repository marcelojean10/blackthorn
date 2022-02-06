import { ApiProperty } from "@nestjs/swagger";

export class RemoveItemCartInputType {
  @ApiProperty()
  id: string;

  @ApiProperty()
  itemId: string;
}
