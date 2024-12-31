import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';

@Controller('api/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentService.findOne(id);
  }

  @Post()
  create(@Body() createCommentDto: Partial<Comment>) {
    return this.commentService.create(createCommentDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCommentDto: Partial<Comment>) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.commentService.delete(id);
  }
}
