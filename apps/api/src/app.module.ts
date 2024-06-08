import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, HealthCheckModule } from '@app/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule, HealthCheckModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
