import { Injectable } from '@nestjs/common';
import { ExampleObjDto } from "./dtos/example-obj.dto";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCow(): string {
    return 'Moo!';
  }

  getExampleObj(): ExampleObjDto {
    return {
      name: "John",
      age: 21,
      isAlive: true
    };
  }
}
