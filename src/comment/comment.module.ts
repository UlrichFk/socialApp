import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { commentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'Comment', schema: commentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
