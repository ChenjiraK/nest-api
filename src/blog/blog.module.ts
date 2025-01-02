import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { User } from '../user/user.entity';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../middleware/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forFeature([Blog, User]),
    ConfigModule.forRoot(), // Load .env file
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [BlogController],
  providers: [BlogService, JwtStrategy],
})
export class BlogModule {}
