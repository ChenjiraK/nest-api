import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>
  ) {}

  findAll() {
    return this.commentRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.commentRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  create(data: Partial<Comment>) {
    return this.commentRepository.save(data);
  }

  update(id: number, data: Partial<Comment>) {
    return this.commentRepository.update(id, data);
  }

  delete(id: number) {
    return this.commentRepository.delete(id);
  }
}
