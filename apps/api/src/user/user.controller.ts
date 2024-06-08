import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserUpdateDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }

  @Get('findOne/:id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return await this.userService.findOne(id);
  }

  @Post('findOneAndUpdate/:id')
  async findOneAndUpdate(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() userDto: UserUpdateDto,
  ) {
    console.log('🚀 ~ UserController ~ id:', id);
    return await this.userService.findOneAndUpdate(id, userDto);
  }

  @Delete('findOneAndDelete/:id')
  async findOneAndDelete(@Param('id', new ParseIntPipe()) id: number) {
    return await this.userService.findOneAndDelete(id);
  }
}
