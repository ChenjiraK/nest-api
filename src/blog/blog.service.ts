import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }

  async findOne(id: number): Promise<Blog> {
    return await this.blogRepository.findOneBy({ id });
  }

  async create(blog: Partial<Blog>): Promise<Blog> {
    const newBlog = this.blogRepository.create(blog);
    return await this.blogRepository.save(newBlog);
  }

  async update(id: number, blog: Partial<Blog>): Promise<Blog> {
    await this.blogRepository.update(id, blog);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.blogRepository.delete(id);
  }
}
