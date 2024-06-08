import { Module } from '@nestjs/common';
import { ConfigModule as NestjsConfig } from '@nestjs/config';

@Module({
  imports: [
    NestjsConfig.forRoot({
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}
