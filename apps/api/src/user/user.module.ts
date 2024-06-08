import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { DatabaseModule, UserEntity } from '@app/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserRepository, UserService],
})
export class UserModule {}
