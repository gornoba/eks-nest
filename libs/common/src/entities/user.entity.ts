import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../database';

@Entity()
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column()
  email: string;

  @Column()
  password: string;
}
