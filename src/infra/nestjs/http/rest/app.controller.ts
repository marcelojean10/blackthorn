import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from '../../../../adapter/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Return hello world!' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
