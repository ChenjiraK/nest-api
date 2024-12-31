import { Blog } from '../blog/blog.entity';
import { Comment } from '../comment/comment.entity';
export declare class User {
    id: number;
    username: string;
    createdAt: Date;
    updatedAt: Date;
    blogs: Blog[];
    comments: Comment[];
}
