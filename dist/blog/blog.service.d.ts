import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { User } from '../user/user.entity';
export declare class BlogService {
    private readonly blogRepository;
    private readonly userRepository;
    constructor(blogRepository: Repository<Blog>, userRepository: Repository<User>);
    findAll(userId?: number | null, query?: any): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    create(data: Partial<Blog>, userId: number): Promise<Blog>;
    update(id: number, data: Partial<Blog>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
