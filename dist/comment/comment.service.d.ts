import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    create(data: Partial<Comment>): Promise<Partial<Comment> & Comment>;
    update(id: number, data: Partial<Comment>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
