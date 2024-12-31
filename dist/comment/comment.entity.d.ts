import { User } from '../user/user.entity';
export declare class Comment {
    id: number;
    user: User;
    blog_id: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
