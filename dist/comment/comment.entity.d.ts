import { User } from '../users/user.entity';
import { Blog } from '../blog/blog.entity';
export declare class Comment {
    id: number;
    user: User;
    blog: Blog;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
