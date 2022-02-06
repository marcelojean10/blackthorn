import { ApiProperty } from "@nestjs/swagger";

export class CreateItemInputType {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  price: number;
}
