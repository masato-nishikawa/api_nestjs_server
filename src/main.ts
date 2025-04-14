import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // モバイルアプリ時は不要
  // app.enableCors(); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// cd api_nestjs_server
// npm run start:dev