import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from 'config'
import { AuthModule } from './auth/auth.module';

const MongoConfig = config.get('mongo')

console.log("MongoConfig", MongoConfig)

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${MongoConfig.user}:${encodeURIComponent(MongoConfig.pass)}@${MongoConfig.dbUrl}`
    ),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
