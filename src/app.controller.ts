import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleObjDto } from "./dtos/example-obj.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("cow")
  getCow(): string {
    return this.appService.getCow();
  }

  @Get("exampleObject")
  getDog(): ExampleObjDto {
    return this.appService.getExampleObj();
  }
}
