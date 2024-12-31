import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/blog.entity';
import { Comment } from './comment/comment.entity';
import { User } from './user/user.entity';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env file
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Blog, Comment, User],
      synchronize: true,
    }),
    BlogModule,
    CommentModule,
    UserModule,
  ],
})
export class AppModule {}
