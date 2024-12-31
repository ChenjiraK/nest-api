import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    create(blog: Partial<Blog>): Promise<Partial<Blog> & Blog>;
    update(id: number, blog: Partial<Blog>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
