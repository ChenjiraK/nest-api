import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  create(data: Partial<User>) {
    return this.userRepository.save(data);
  }

  update(id: number, data: Partial<User>) {
    return this.userRepository.update(id, data);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
