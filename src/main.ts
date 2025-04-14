import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // これがFlutterとの通信に必要！
  app.enableCors(); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
