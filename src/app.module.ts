import { Module } from '@nestjs/common';
import { AppController, ApiController} from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  // Apiコントローラも追加しないと動かない
  controllers: [AppController, ApiController], 
  providers: [AppService],
})
export class AppModule {}
