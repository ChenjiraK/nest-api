import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(data: Partial<User>): Promise<Partial<User> & User>;
    update(id: number, data: Partial<User>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    login(user: User): Promise<{
        access_token: string;
    }>;
    validateUser(username: string): Promise<User>;
}
