import { ApiProperty } from "@nestjs/swagger";

export class ExampleObjDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  isAlive: boolean;
}