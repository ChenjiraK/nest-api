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

  findAll(query: any) {
    const where: any = {};
    if (query.user_id) {
      where.user = { id: query.user_id };
    }
    return this.blogRepository.find({ where, relations: ['user', 'comments'] });
  }

  findOne(id: number) {
    return this.blogRepository.findOne({
      where: { id },
      relations: ['user', 'comments'],
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
