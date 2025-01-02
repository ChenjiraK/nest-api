import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Blog } from './blog.entity';
import { User } from '../user/user.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAll(userId?:number | null, query?:any) {
    const queryBuilder = this.blogRepository.createQueryBuilder('blog')
      .leftJoinAndSelect('blog.user', 'user')
      .leftJoinAndSelect('blog.comments', 'comments');

      if (userId) {
        //blog.userId from @ManyToOne User
        queryBuilder.andWhere('blog.userId = :userId', { userId });
      }

      if (query?.search) {
        //search title or content
        queryBuilder.andWhere(
          '(blog.title LIKE :search OR blog.content LIKE :search)',
          { search: `%${query.search}%` }
        );
      }
      return queryBuilder.getMany();
  }

  findOne(id: number) {
    return this.blogRepository.findOne({
      where: { id },
      relations: ['user', 'comments'],
    });
  }

  async create(data: Partial<Blog>, userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error('User not found');
    }
    return this.blogRepository.create({
      ...data,
      user,
    });
  }

  update(id: number, data: Partial<Blog>) {
    return this.blogRepository.update(id, data);
  }

  delete(id: number) {
    return this.blogRepository.delete(id);
  }
}
