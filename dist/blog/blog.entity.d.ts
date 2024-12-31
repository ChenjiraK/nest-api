import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
export declare class Blog {
    id: number;
    user: User;
    comments: Comment[];
    communityId: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
