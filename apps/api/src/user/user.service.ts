import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDto } from './user.dto';
import { UserEntity } from '@app/common';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDto: UserDto) {
    const payload = new UserEntity({
      ...userDto,
    });

    return await this.userRepository.create(payload);
  }

  async findOne(id: number) {
    const whereOptions: FindOptionsWhere<UserEntity> = {
      id,
    };

    return await this.userRepository.findOne(whereOptions);
  }

  async findOneAndUpdate(id: number, userDto: UserDto) {
    const whereOptions: FindOptionsWhere<UserEntity> = {
      id,
    };

    const payload = new UserEntity({
      ...userDto,
    });

    return await this.userRepository.findOneAndUpdate(whereOptions, payload);
  }

  async findOneAndDelete(id: number) {
    const whereOptions: FindOptionsWhere<UserEntity> = {
      id,
    };

    return await this.userRepository.findOneAndDelete(whereOptions);
  }
}
