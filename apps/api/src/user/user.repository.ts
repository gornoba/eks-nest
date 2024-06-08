import { AbstractRepository, UserEntity } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends AbstractRepository<UserEntity> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectRepository(UserEntity) userRepository: Repository<UserEntity>,
    entityManager: EntityManager,
  ) {
    super(userRepository, entityManager);
  }
}
