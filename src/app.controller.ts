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

//　Controllerの中身は/以降の値を決める
@Controller('api')
export class ApiController {
  @Get('hello')
  // anyはTSの型指定なし
  getHello(): any {
    return {
      message: 'Hello from NestJS!',
      status: 'success',
      timestamp: new Date(),
    };
  }

  @Get('person')
  getPerson(): any {
    return[
      {
        id: 123,
        name: '田中太郎',
        email: 'tanakataro1@example.com',
      },
      {
        id: 456,
        name: 'タナカタロウ',
        email: 'tanakataro2@example.com',
      },
      {
        id: 789,
        name: 'Taro Tanaka',
        email: 'tanakataro3@example.com',
      },
    ];
  }
}