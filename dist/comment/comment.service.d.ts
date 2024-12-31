import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    create(comment: Partial<Comment>): Promise<Comment>;
    update(id: number, updatedComment: Partial<Comment>): Promise<Comment>;
    delete(id: number): Promise<void>;
}
