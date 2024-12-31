import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {
    console.log('innitial comments controller')
  }

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Post()
  create(@Body() comment: Partial<Comment>): Promise<Comment> {
    return this.commentService.create(comment);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedComment: Partial<Comment>,
  ): Promise<Comment> {
    return this.commentService.update(id, updatedComment);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.commentService.delete(id);
  }
}
