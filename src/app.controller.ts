import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Root endpoint!';
  }

  @Get('hello')
  getHello(): string {
    return 'Hello from NestJS!';
  }

  @Get('server')
  getServer(): string {
    return 'サーバーへの第一歩です';
  }

}
