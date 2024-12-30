import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    create(blog: Partial<Blog>): Promise<Blog>;
    update(id: number, blog: Partial<Blog>): Promise<Blog>;
    delete(id: number): Promise<void>;
}
