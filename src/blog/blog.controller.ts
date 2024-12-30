import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {
    console.log('BlogController initialized');
  }

  @Get()
  findAll(): Promise<Blog[]> {
    console.log('Fetching all blogs...');
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Blog> {
    return this.blogService.findOne(id);
  }

  @Post()
  create(@Body() blog: Partial<Blog>): Promise<Blog> {
    return this.blogService.create(blog);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() blog: Partial<Blog>): Promise<Blog> {
    return this.blogService.update(id, blog);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.blogService.delete(id);
  }
}
