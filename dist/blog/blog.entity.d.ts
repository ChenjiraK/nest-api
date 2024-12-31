import { User } from '../users/user.entity';
import { Comment } from '../comment/comment.entity';
export declare class Blog {
    id: number;
    user: User;
    community_id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    comments: Comment[];
}
