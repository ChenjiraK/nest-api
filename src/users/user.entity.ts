import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Blog } from '../blog/blog.entity';
  import { Comment } from '../comment/comment.entity';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255, nullable: true })
    username: string;
  
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'datetime' })
    updatedAt: Date;
  
    @OneToMany(() => Blog, (blog) => blog.user)
    blogs: Blog[];
  
    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
  }
  