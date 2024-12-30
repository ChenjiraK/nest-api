import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    create(blog: Partial<Blog>): Promise<Blog>;
    update(id: number, blog: Partial<Blog>): Promise<Blog>;
    delete(id: number): Promise<void>;
}
