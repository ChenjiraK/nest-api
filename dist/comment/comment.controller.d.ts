import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    create(createCommentDto: Partial<Comment>): Promise<Partial<Comment> & Comment>;
    update(id: number, updateCommentDto: Partial<Comment>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
