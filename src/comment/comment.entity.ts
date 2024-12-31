import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from '../users/user.entity';
  import { Blog } from '../blog/blog.entity';
  
  @Entity()
  export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.comments, { nullable: true, onDelete: 'SET NULL' })
    user: User;
  
    @ManyToOne(() => Blog, (blog) => blog.comments, { nullable: true, onDelete: 'SET NULL' })
    blog: Blog;
  
    @Column({ type: 'text', nullable: true })
    comment: string;
  
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'datetime' })
    updatedAt: Date;
  }  