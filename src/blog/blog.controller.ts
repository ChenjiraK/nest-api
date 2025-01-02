import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Query,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../middleware/jwt-auth.guard';

@Controller('api/blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(@Query() query) {
    return this.blogService.findAll(null, query);
  }

  @Get('myblogs')
  @UseGuards(JwtAuthGuard)
  findBlogsByUserId(@Req() req, @Query() query) {
    const userId = req.user.userId ?? null; // Extract userId from token
    if (!userId) {
      throw new Error('User not found');
    }
    return this.blogService.findAll(userId, query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.blogService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() blog: Partial<Blog>, @Req() req) {
    const userId = req.user.userId; // Extract userId from token
    return this.blogService.create(blog, userId);
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
