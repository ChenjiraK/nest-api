import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { BlogModule } from '../blog/blog.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), BlogModule, UsersModule],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}