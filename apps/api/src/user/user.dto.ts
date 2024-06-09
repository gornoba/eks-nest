import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 'test@test.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '12345',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UserUpdateDto {
  @ApiProperty({
    example: 'tes2t@test.com',
  })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '23456',
  })
  @IsOptional()
  @IsString()
  password: string;
}
