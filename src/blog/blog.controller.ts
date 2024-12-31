import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('api/blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.blogService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.blogService.findOne(id);
  }

  @Post()
  create(@Body() blog: Partial<Blog>) {
    return this.blogService.create(blog);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() blog: Partial<Blog>) {
    return this.blogService.update(id, blog);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.blogService.delete(id);
  }
}
