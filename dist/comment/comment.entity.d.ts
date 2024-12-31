import { User } from '../user/user.entity';
export declare class Comment {
    id: number;
    user: User;
    blog: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
