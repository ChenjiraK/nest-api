import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
    findAll(query: any): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    create(data: Partial<Blog>): Promise<Partial<Blog> & Blog>;
    update(id: number, data: Partial<Blog>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
