import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>
  ) {}

  findAll() {
    return this.blogRepository.find({ relations: ['user_id'] });
  }

  findOne(id: number) {
    return this.blogRepository.findOne({
      where: { id },
      relations: ['user_id'],
    });
  }

  create(data: Partial<Blog>) {
    return this.blogRepository.save(data);
  }

  update(id: number, data: Partial<Blog>) {
    return this.blogRepository.update(id, data);
  }

  delete(id: number) {
    return this.blogRepository.delete(id);
  }
}
