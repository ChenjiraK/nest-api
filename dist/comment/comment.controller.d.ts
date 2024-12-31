import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    create(comment: Partial<Comment>): Promise<Comment>;
    update(id: number, updatedComment: Partial<Comment>): Promise<Comment>;
    delete(id: number): Promise<void>;
}
