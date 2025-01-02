import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
// import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
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

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user.id }; // save username and user_id in payload login
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ username });
    // const validatePassword = await bcrypt.compare(username, user.username); //validate password & hash password
    if (!user || !Boolean(username === user.username)) {
      throw new UnauthorizedException('Username Invalid');
    }
    return user;
  }
}
