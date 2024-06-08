import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, DatabaseModule, UserEntity } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([UserEntity]),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
